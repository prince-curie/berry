'reach 0.1';

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

  const Borrower = ParticipantClass('Borrower', {
    // Specify Bob's interact interface here
    ...common
  });
  
  deploy();

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
