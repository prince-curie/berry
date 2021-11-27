import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import launchToken from '@reach-sh/stdlib/launchToken.mjs'

const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const [ accOwner, accLender, accBorrower ] =
    await stdlib.newTestAccounts(3, startingBalance);

  console.log('Hello, Alice and Bob!');

  console.log('Launching...');
  const ctcOwner = accOwner.contract(backend);
  const ctcLender = accLender.contract(backend, ctcOwner.getInfo());
  const ctcBorrower = accBorrower.contract(backend, ctcOwner.getInfo());

  console.log('creating dash token');
  const dashToken = await launchToken(stdlib, accOwner, 'dashToken', 'DTN')
  console.log(`dashtoken ==> ${dashToken.id}`)
  
  console.log('Starting backends...');

  const Common = () => ({
    viewLendingToken: (Token) => {
      console.log(`The token accepted for lending is ${Token}`)
    },
  });
  
  await Promise.all([

    backend.Owner(ctcOwner, {
      ...stdlib.hasRandom,

      acceptToken: () => {
        console.log('try accept token');
        return dashToken.id;
      },
        
      ...Common()
    }),
    
    backend.Lender(ctcLender, {
      ...stdlib.hasRandom,
      // implement Bob's interact object here
      ...Common(),
    }),

    backend.Borrower(ctcBorrower, {
      ...Common()
    })
  ]);

  console.log('Goodbye, Alice and Bob!');
})();
