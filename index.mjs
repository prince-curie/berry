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
          token: dashToken.id, amount: 100000000, createdAt: Math.floor(Date.now() / 86400000) 
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