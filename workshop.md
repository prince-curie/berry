# **Lending Platform**

In this workshop, we will design an application that allows a participant to decide which token will be used for lending on the platform, another participant to bring in the lending token and after a time period withdraw their token with interest.

`This workshop is an improvement on the initial lending platform wokshop available without the borrowing part.`

We will assume you have Reach installed in the root of your system already and that you will be working in the `~/reach/lending-platform`.

```bash
mkdir ~/reach/lending-platform && cd ~/reach/lending-platform
```

To confirm you have Reach installed run

```reach
./reach version
```
This will return the version of reach you have installed on your system.

To start writing a Rewach program you run
```bash
./reach init
```

### **Problem Analysis**
The first step in any program design is to perform problem analysis and determine what information is relevant to the problem. When writing decentralized applications in Reach, this information analysis includes an analysis of the set of participants involved in a computation.

In this case, let's ask the questions:

- Who is involved in this application?
- What information do they know at the start of the program?
- What information are they going to discover and use in the program?
- What funds change ownership during the application and how?

You should write your answers in your Reach program (index.rsh) using a comment. 

```/* Remember comments are written like this. */```

**Write down the problem analysis of this program as a comment.**

Let's see how your answers compare to our answers:

- This program involves two parties: the owner of the smart contract deciding what token will be used for lending and the lender bringing in the tokens for lending.

- The Owner starts off knowing the token that will be used for lending.
- The Lender starts off knowing nothing.
- During the execution of the program the Owner and the Lender can find out the token to be used for borrowing.
- The Lender sends the stated token into the program and later withdraws it with interest.

This analyses helps us to understand what the application is supposed to be doing.

### **Data Definition**

This section helps us to translate the information gotten from the problem analysis into concrete data.

So, for this program, we should decide:

- What data type will specify the token the Owner specifies for lending?

After discussing the data type we need to discuss about how each participant interacts with the program by answering the question:

-  What participant interact interface will each participant use?

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

**Write down the data definitions for this program as definitions.**

Let's compare notes again.

- We are representing the token the Owner is specifying for lending with the datatype `Token`.
- The Owner and Lender will have a function called `getDate` that returns the current date from the user end and `viewLendingToken` will return details of the token to be lent out from the system.
- The Lender will have a function called `lend` that accepts an object that contains the token we are lending, the current date and the amount to be lent in. 
- The Lender will also have a function called withdraw that returns the amount withdrawn from the program.

```Reach
  const Owner = Participant('Owner', {
    acceptToken: Token,
    ...common
  });

  const Lender = ParticipantClass('Lender', {
    // Specify lender's interact interface here
    ...common,
    lend: Fun([], Object({token: Token, amount: UInt, createdAt: UInt })),
    withdraw: Fun([UInt], Null),
  });
```

The `common` found above is an object containing the interactions that can occur between the Owner and the Lender. The common object code is found below

```Reach
const common = {
  viewLendingToken: Fun([Object({
    id: Token,
    lendingAPY: UInt,
    borrowingAPY: UInt,
  })], Null),

  getDate: Fun([], UInt)
}
```
N.B: Kindly define the common object before you introduce remaining interact functions.

### **Communication Construction**
This section looks into how communication and action should take place.

Firstly we will do it as a comment.

```
// 1. The Owner decides the token to used for lending
// 2. The concensus remembers the token id for the token used in lending
// 3. The Lenders individually transfer into the concensus the token used in lending until the total number of token required is exceeded.
// 4. The Lender ask to withdraw the lent token and generated interest.  
```

### **Write down the communication pattern for this program as code**
Here we will convert all the Steps mentioned above into code.

The  body of the application will look like what we have below. 

```Reach
// 1. The Owner decides the token to used for lending
    
    Owner.publish(acceptedLendingToken, acceptedLendingTokenId);

// 2. The concensus sets the mapping for saving a the amount a Lender lent and the time it was done.
    
    const liquidityData = new Map(Object({
        amount: UInt,
        createdAt: UInt
    }));

    commit();

// 3. The Lenders individually pay into the concensus the token used in lending until the total number of token required is exceeded.
    
    Lender.publish(amount, createdAt, lendingUserAccount)
      .pay([[amount, acceptedLendingTokenId]])
      .when(Lender == lendingUserAccount && isNone(liquidityData[lendingUserAccount]))
      .timeout(false);

// 4. The Lender ask to withdraw the lent token plus generated interest.  

    transfer(totalEarning, acceptedLendingTokenId).to(lenderAccount);

    totalVested = totalVested - totalEarning;

    continue;
```

### **Assertion Insertion**
Here we look at the assumptions we came up with for this program. 

But the truth is this program has nothing special to proof. Every assumption needed to be proven are already automatically included in all reach programs.

### **Interaction Introduction**

Here we add all the interactions with the participants. This is done by making calls to `interact`. To ensure no duplication of code we use `each` signalling that all participants can make a call to that.

So inserting interaction calls our program will become.

```Reach
'reach 0.1';

// This is an index.rsh file and can be found at ~/reach/lending-platform/index.rsh

const common = {
  viewLendingToken: Fun([Object({
    id: Token,
    lendingAPY: UInt,
    borrowingAPY: UInt,
  })], Null),

  getDate: Fun([], UInt)
}

export const main = Reach.App(() => {
  const Owner = Participant('Owner', {
    acceptToken: Token,
    ...common
  });

  const Lender = ParticipantClass('Lender', {
    // Specify lender's interact interface here
    ...common,
    lend: Fun([], Object({token: Token, amount: UInt, createdAt: UInt })),
    withdraw: Fun([UInt], Null),
  });
  
  init();

  Owner.only(() => {
    const acceptedLendingTokenId = declassify(interact.acceptToken);

    const acceptedLendingToken = {
      id: acceptedLendingTokenId,
      lendingAPY: 5,
      borrowingAPY: 7,
    };
  });

  Owner.publish(acceptedLendingToken, acceptedLendingTokenId);

  const liquidityData = new Map(Object({
    amount: UInt,
    createdAt: UInt
  }));

  commit();


  each([Owner, Lender], () => {
    interact.viewLendingToken(acceptedLendingToken)
  });

  Lender.only(() => {

  });
  
  Lender.publish();

  var totalSupply = 3000;
  invariant(balance() == 0);
  while(totalSupply > 0) {

    commit()  
  
    Lender.only(() => {
      
      const { amount, token, createdAt } = declassify(interact.lend());
      const lendingUserAccount = this;

      assume(amount > 0, 'Amount must be greater than zero');
      assume(token === acceptedLendingTokenId, 'Token not allowed')
      assume(createdAt > 1000);
      assume(totalSupply >= amount);
    });
    
    Lender.publish(amount, createdAt, lendingUserAccount)
      .pay([[amount, acceptedLendingTokenId]])
      .when(Lender == lendingUserAccount && isNone(liquidityData[lendingUserAccount]))
      .timeout(false);

    require(totalSupply >= amount);
    require(createdAt > 1000);
    require(amount > 0, 'Amount must be greater than zero');

    const checkDeposit = fromSome(
      liquidityData[lendingUserAccount],
      {amount: 0, createdAt: 0}
    );

    if(checkDeposit.createdAt == 0) {
      liquidityData[lendingUserAccount] = {
        amount: amount,
        createdAt: createdAt 
      };
    } else {
      liquidityData[lendingUserAccount] = {
        amount: checkDeposit.amount + amount,
        createdAt: createdAt 
      };
    }
    
    totalSupply = totalSupply - amount
      
    continue;  
  }
  commit();

  Lender.only(() => {

  })

  Lender.publish();

  var totalVested = balance(acceptedLendingTokenId); 
  invariant(balance() == 0);
  while(totalVested > 0) {
    commit();
    
    Lender.only(() => {
      // Time stamp in days.
      const todayDate = declassify(interact.getDate());
      const lenderAccount = this;

      const deposit = fromSome(
          liquidityData[lenderAccount],
          {amount: 0, createdAt: 0}
      );
      
      const amountDeposited = deposit.amount;
      const dateDeposited = deposit.createdAt;

      assume(todayDate >= dateDeposited);
      assume(balance(acceptedLendingTokenId) >= amountDeposited, 'Currently not enough money to pay you, try again later.');

      const daysVested = todayDate - dateDeposited;

      const interestPercent = (acceptedLendingToken.lendingAPY / 365) * daysVested;
      const interest = (interestPercent/100) * amountDeposited
      const totalEarning = interest + amountDeposited;

      interact.withdraw(totalEarning);
      
    });
    Lender.publish(
      todayDate, dateDeposited, amountDeposited, daysVested, interest, totalEarning, lenderAccount
    ).when(
      Lender == lenderAccount && 
      isSome(liquidityData[lenderAccount]) &&
      totalVested >= amountDeposited
    )
    .timeout(false);
    
    require(todayDate >= dateDeposited);
    require(balance(acceptedLendingTokenId) >= amountDeposited, 'Currently not enough money to pay you, try again later.');
    require(totalEarning >= amountDeposited);;
    require(balance(acceptedLendingTokenId) >= totalEarning);
    
    delete liquidityData[this];
  
    transfer(totalEarning, acceptedLendingTokenId).to(lenderAccount);
    
    totalVested = totalVested - totalEarning;

    continue;
  } 
  
  transfer(balance(acceptedLendingTokenId), acceptedLendingTokenId).to(Owner);
  require(balance(acceptedLendingTokenId) == 0);

  commit();

  exit();
});

```

### **Deployment Decisions**

In order to do this we wrote a test that not only automates the deployment but also test it.

Here is the javascript frontend written for such purpose.

```Reach
// This is an index.mjs file

import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import launchToken from '@reach-sh/stdlib/launchToken.mjs'

const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const [ accOwner, accLender, accBorrower, accLender2, accLender3 ] =
    await stdlib.newTestAccounts(5, startingBalance);

  console.log('Hello, Alice and Bob!');

  console.log('Launching...');
  const ctcOwner = accOwner.contract(backend);
  const ctcLender = accLender.contract(backend, ctcOwner.getInfo());
  // const ctcBorrower = accBorrower.contract(backend, ctcOwner.getInfo());
  const ctcLender2 = accLender2.contract(backend, ctcOwner.getInfo());
  const ctcLender3 = accLender3.contract(backend, ctcOwner.getInfo());

  const lenders = [ctcLender, ctcLender2, ctcLender3];
  const lenderAcc = [accLender, accLender2, accLender3]

  console.log('creating dash token');
  const dashToken = await launchToken(stdlib, accOwner, 'dashToken', 'DTN')
  console.log(`dashtoken ==> ${dashToken.id}`)
  console.log('Starting backends...');

  const Common = () => ({
    viewLendingToken: ({id, lendingAPY, borrowingAPY}) => {
      console.log(`The token accepted for lending is: tokenId = ${id}, lendingAPY = ${lendingAPY} , borrowingAPY = ${borrowingAPY}`)
    },
    getDate: () => {
      console.log('fetching date')
      const date = Math.floor(Date.now() / 86400000)
      console.log(date)
      return date;
    }
  });

  for( let index = 0; index < lenders.length; index++) {
    console.log('Lender accepts lending token');
    await lenderAcc[index].tokenAccept(dashToken.id);
    console.log('minting tokens')
    await dashToken.mint(lenderAcc[index], 400000000);
  }

  const lending = lenders.map(async (lender, index) => {
    const contractAddress = await ctcLender.getContractAddress();
    const address = stdlib.formatAddress(contractAddress)
    var contractBalance = await stdlib.balanceOf(address, dashToken.id)
    console.log(`balance of contract ${contractBalance}`)
    
    backend.Lender(lender, {
      // implement Bob's interact object here
      ...Common(),

      lend: async () => {
        console.log('try lending');
        console.log(`${lenderAcc[index].getAddress()} remaining balance ${await stdlib.balanceOf(lenderAcc[index], dashToken.id)}`)

        contractBalance = await stdlib.balanceOf(address, dashToken.id)
        console.log(`balance of contract ${contractBalance}`)

        return { 
          token: dashToken.id, amount: 1000, createdAt: Math.floor(Date.now() / 86400000) 
        };
      },

      withdraw: async (amount) => {
        console.log('try withdrawing');
        console.log(`${lenderAcc[index].getAddress()} remaining balance before ${await stdlib.balanceOf(lenderAcc[index], dashToken.id)}`)
        console.log(`The amount withdrawn is ${amount}`)

        contractBalance = await stdlib.balanceOf(address, dashToken.id)
        console.log(`balance of contract ${contractBalance}`)
      },
    })
  })
  
  console.log('owner')
  await Promise.all([

    backend.Owner(ctcOwner, {

      acceptToken: dashToken.id,
        
      ...Common()
    }),

    ...lending,
  ])

  console.log('Goodbye, Alice and Bob!');
})();
```

On running the program the output becomes:

```bash
Hello!
Launching...
creating dash token
dashtoken ==> 60
Starting backends...
Lender accepts lending token
minting tokens
Lender accepts lending token
minting tokens
Lender accepts lending token
minting tokens
owner
balance of contract 0
balance of contract 0
balance of contract 0
The token accepted for lending is: tokenId = 60, lendingAPY = 5 , borrowingAPY = 7
The token accepted for lending is: tokenId = 60, lendingAPY = 5 , borrowingAPY = 7
The token accepted for lending is: tokenId = 60, lendingAPY = 5 , borrowingAPY = 7
The token accepted for lending is: tokenId = 60, lendingAPY = 5 , borrowingAPY = 7
try lending
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance 400000000
try lending
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance 400000000
balance of contract 0
try lending
balance of contract 0
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance 400000000
balance of contract 0
try lending
try lending
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance 400000000
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance 399999000
balance of contract 1000
balance of contract 1000
try lending
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance 399999000
balance of contract 2000
try lending
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance 399999000
balance of contract 2000
try lending
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance 400000000
balance of contract 2000
try lending
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance 400000000
balance of contract 2000
fetching date
19007
try withdrawing
fetching date
19007
try withdrawing
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance before 399999000
The amount withdrawn is 1000
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance before 399999000
The amount withdrawn is 1000
balance of contract 3000
balance of contract 3000
fetching date
19007
try withdrawing
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance before 400000000
The amount withdrawn is 0
balance of contract 2000
fetching date
19007
try withdrawing
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance before 399999000
The amount withdrawn is 1000
balance of contract 2000
fetching date
19007
try withdrawing
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance before 399999000
The amount withdrawn is 1000
fetching date
19007
try withdrawing
balance of contract 2000
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance before 399999000
The amount withdrawn is 1000
balance of contract 2000
fetching date
19007
try withdrawing
fetching date
19007
try withdrawing
0x1219c7fe9a1b02eb38b3bf1514094296df0715fb31d57ba448ef83cd36a43f84 remaining balance before 399999000
The amount withdrawn is 1000
0x59b04bc6d43091fdffb902d36b0220fc4ec8cab65372900949033af3bd493cf3 remaining balance before 400000000
The amount withdrawn is 0
balance of contract 1000
balance of contract 1000
fetching date
19007
try withdrawing
0xb2569b214e46b41c38b60645d30dda74fe8906476856797613516ff6666ca592 remaining balance before 400000000
The amount withdrawn is 0
balance of contract 1000
Goodbye!
```

### **Discussion and Next Steps**

If you made it this far, great job.

The application can be improved by adding logic for other users to borrow, adding events to notify users when an action takes place.

Hope you had fun placing along with this workshop.