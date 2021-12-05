'reach 0.1';

const common = {
  viewLendingToken: Fun([Object({
    id: Token,
    lendingAPY: UInt,
    borrowingAPY: UInt,
  })], Null),

  getDate: Fun([], UInt)
}

// const Logger = {
//   logString: Fun([Bytes(8)], Null),
//   logInt: Fun([UInt], Null),
//   logBool: Fun([Bool], Null)
// };

export const main = Reach.App(() => {
  const Owner = Participant('Owner', {
    acceptToken: Token,
    ...common
  });

  const Lender = Participant('Lender', {
    // Specify lender's interact interface here
    ...common,
    // ...Logger,
    // acceptLiquidityToken: Fun([Token], Null),
    lend: Fun([], Object({token: Token, amount: UInt, createdAt: UInt })),
    withDraw: Fun([UInt], Null),
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

  // const berryToken = new Token({ 
  //   'name': Bytes(32).pad('BerryToken'), 
  //   'symbol': Bytes(8).pad('BTN'),
  // });

  commit();


  each([Owner, Lender], () => {
    interact.viewLendingToken(acceptedLendingToken)
  });

  Lender.only(() => {
    // interact.acceptLiquidityToken(berryToken);
  });
  
  Lender.publish();

  
  

  var [totalVested, totalSupply] = [balance(acceptedLendingTokenId), 1000000000];
  invariant(balance(acceptedLendingTokenId) == totalVested);
  while(totalSupply > 0 || totalVested >= 0) {

    commit()  
  
    Lender.only(() => {
      // interact.acceptLiquidityToken(berryToken);
      
      const { amount, token, createdAt } = declassify(interact.lend());
      // assume(amount <= balance(berryToken));
      assume(amount > 0, 'Amount must be greater than zero');
      assume(token === acceptedLendingTokenId, 'Token not allowed')
      assume(createdAt > 10000000);
      assume(balance(acceptedLendingTokenId) == totalVested);
    });
    
    Lender.publish(amount, createdAt)
      .pay([[amount, acceptedLendingTokenId]]);
    
    // Lender.interact.logInt(amount);
    require(Lender == this);
    // require(totalSupply > 0);
    require(createdAt > 10000000);
    // require(amount <= balance(berryToken));
    require(amount > 0, 'Amount must be greater than zero');
    // require(token === acceptedLendingToken, 'Token not allowed');
    
    // transfer(amount, berryToken).to(this);

    if(amount) {
      liquidityData[this] = {
        amount: amount,
        createdAt: createdAt 
      };

      [totalVested, totalSupply] = [
        totalVested + amount, totalSupply - amount
      ];
      
      continue;
    }

    commit();
    
    Lender.only(() => {
      // Time stamp in days.
      const todayDate = declassify(interact.getDate());

      const deposit = fromSome(
          liquidityData[this],
          {amount: 0, createdAt: 0}
      );
      
      const amountDeposited = deposit.amount;
      const dateDeposited = deposit.createdAt;

      assume(todayDate > dateDeposited);
      assume(totalVested > amountDeposited);
      assume(totalVested > 0);
      assume(balance(acceptedLendingTokenId) == totalVested)

      const daysVested = todayDate - dateDeposited;

      const interestPercent = (acceptedLendingToken.lendingAPY / 365) * daysVested;
      const interest = (interestPercent/100) * amountDeposited
      const totalEarning = interest + amountDeposited;

      interact.withDraw(totalEarning);
      
    });
    Lender.publish(
      todayDate, dateDeposited, amountDeposited, daysVested, interest, totalEarning
    );
    // .pay([[amountDeposited, berryToken]]);
      
    require(Lender == this)
    require(todayDate > dateDeposited);
    require(totalEarning > amountDeposited);
    require(totalVested >= amountDeposited);
    require(balance(acceptedLendingTokenId) >= totalEarning);
    require(totalVested > 0);  

    delete liquidityData[this];
  
    if(amountDeposited) {
      transfer(amountDeposited, acceptedLendingTokenId).to(this);
      transfer(interest, acceptedLendingTokenId).to(this);
      // berryToken.burn(amountDeposited);
      
      [totalVested, totalSupply] = [
        // totalVested - amountDeposited, totalSupply
        totalVested - totalEarning, totalSupply
      ];

      continue;
    } 
  } 
  
  transfer(totalVested, acceptedLendingTokenId).to(Lender);
  require(balance(acceptedLendingTokenId) == 0);
  require(totalVested == 0);

  // require(balance(berryToken) == berryToken.supply());
  // berryToken.burn(berryToken.supply());
  // require(berryToken.supply() == 0);
  
  // berryToken.destroy();
  // assert(berryToken.destroyed() == true);

  commit();

  exit();
});
