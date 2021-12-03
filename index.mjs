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

  console.log('creating dash token');
  const dashToken = await launchToken(stdlib, accOwner, 'dashToken', 'DTN')
  console.log(`dashtoken ==> ${dashToken.id}`)
  
  console.log('Lender accepts lending token');

  // accLender.tokenAccept(dashToken.id);
  // dashToken.mint(accLender, 100000000);

  console.log('Starting backends...');

  const Common = () => ({
    viewLendingToken: ({id, lendingAPY, borrowingAPY}) => {
      console.log(`The token accepted for lending is: tokenId = ${id}, lendingAPY = ${lendingAPY} , borrowingAPY = ${borrowingAPY}`)
    },
  });

  const lending = lenders.map(lender => {
    lender.tokenAccept(dashToken.id);
    
    dashToken.mint(accLender, 100000000);

    backend.Lender(lender, {
      // ...stdlib.hasRandom,
      // implement Bob's interact object here
      ...Common(),

      // acceptLiquidityToken: (token) => {
      //   console.log(`Lender accepting liquidity token ${token}`)

      //   accLender.tokenAccept(token);
      // },

      lend: () => {
        console.log('try lending');
        return { 
          token: dashToken.id, amount: 100000, createdAt: Math.floor(Date.now() / 86400000) 
        };
      },

      // logInt: (amount) => {
      //   console.log(`Amount sent in is: ${amount}`)
      // },
    })
  })
  
  await Promise.all([

    backend.Owner(ctcOwner, {
      ...stdlib.hasRandom,

      acceptToken: dashToken.id,
        
      ...Common()
    }),
    
    ...lending,

    // backend.Borrower(ctcBorrower, {
    //   ...Common()
    // })
  ]);

  console.log('Goodbye, Alice and Bob!');
})();
