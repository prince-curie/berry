'reach 0.1';

const common = {
  viewLendingToken: Fun([Token], Null) 
}

const Logger = {
  logString: Fun([Bytes(8)], Null),
  logInt: Fun([UInt], Null),
  logBool: Fun([Bool], Null)
};

const supply = 100000000000

export const main = Reach.App(() => {
  const Owner = Participant('Owner', {
    acceptToken: Fun([], Token),
    ...common
  });

  const Lender = Participant('Lender', {
    // Specify lender's interact interface here
    ...common,
    lend: Fun([], Object({token: Token, amount: UInt })),
    ...Logger,
    acceptLiquidityToken: Fun([Token], Null)
  });

  const Borrower = ParticipantClass('Borrower', {
    // Specify Bob's interact interface here
    ...common
  });
  
  deploy();

  Owner.only(() => {
    const acceptedLendingToken = declassify(interact.acceptToken());
  });
  Owner.publish(acceptedLendingToken);
  commit();

  Owner.pay([[0, acceptedLendingToken]]);

  const berryToken = new Token({ 
    'name': Bytes(32).pad('BerryToken'), 
    'symbol': Bytes(8).pad('BTN'),
    'supply': supply 
  });

  commit()  
  
  each([Owner, Lender, Borrower], () => {
    interact.viewLendingToken(acceptedLendingToken)
  });

  Lender.only(() => {
    interact.acceptLiquidityToken(berryToken);

    const { amount, token } = declassify(interact.lend());
    assume(amount <= balance(berryToken));
    assume(amount > 0, 'Amount must be greater than zero');
    assume(token === acceptedLendingToken, 'Token not allowed')
  });

  Lender.publish(amount, token);
  Lender.interact.logInt(amount);

  require(amount <= balance(berryToken));
  require(amount > 0, 'Amount must be greater than zero');
  require(token === acceptedLendingToken, 'Token not allowed');
  
  commit();

  Lender.pay([[amount, acceptedLendingToken]]);
  
  const liquidityData = new Map(UInt);
  
  liquidityData[Lender] = amount;

  transfer(amount, berryToken).to(Lender);

  transfer(amount, acceptedLendingToken).to(Lender);

  commit();
  
  // const liquidityDetails = Object({
  //   "token": UInt, 
  //   "collateralFactor": UInt,
  //   "totalBorrowed": UInt,
  //   'totalSupply': UInt,
  //   "lendAPY": UInt,
  //   "borrowAPY": UInt
  // });

  // const liquidity = Object({
  //   "liquidityDetails": liquidityDetails
  // });
  
  // require(amount > 0, 'Amount must be greater than zero');
  
  // liquidityOwner.token = token;
  // liquidityOwner.balance = amount;

  // if(Object.has())
  // const tokenData = liquidity[token];
  
  // const tokenBalance = tokenData.totalSupply;

  // liquidity[token] = {
  //   token: token,
  //   collateralFactor: 75,
  //   totalSupply: 0,
  //   totalBorrowed: 0,
  //   lendAPY: 3,
  //   borrowAPY: 5
  // };

  // commit();

  // commit();
  // The second one to publish always attaches
  Borrower.publish();

  commit();
  // write your program here
  
  Lender.pay([[amount, berryToken]]);
  
  berryToken.burn(balance(berryToken));

  require(berryToken.supply() == 0);
  assert(berryToken.destroyed() == false);

  berryToken.destroy();

  commit();

  exit();
});
