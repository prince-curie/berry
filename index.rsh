'reach 0.1';

const common = {
  viewLendingToken: Fun([Token], Null) 
}

export const main = Reach.App(() => {
  const Owner = Participant('Owner', {
    acceptToken: Fun([], Token),
    ...common
  });

  const Lender = ParticipantClass('Lender', {
    // Specify lender's interact interface here
    lend: Fun([], Object({
      token: UInt,
      amount: UInt
    })),
    ...common
  });
  const Borrower = ParticipantClass('borrower', {
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
  commit()  
  
  Owner.only(() => {
    interact.viewLendingToken(acceptedLendingToken);
  });
    
  Lender.only(() => {
    const {token, amount} = declassify(interact.lend());
    assume(amount > 0, 'Amount must be greater than zero');
  });
  
  Lender.publish(token, amount);
  
  const liquidityDetails = Object({
    "token": UInt, 
    "collateralFactor": UInt,
    "totalBorrowed": UInt,
    'totalSupply': UInt,
    "lendAPY": UInt,
    "borrowAPY": UInt
  });

  const liquidity = Object({
    "liquidityDetails": liquidityDetails
  });
  
  require(amount > 0, 'Amount must be greater than zero');
  
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

  commit();


  // commit();
  // The second one to publish always attaches
  Borrower.publish();
  commit();
  // write your program here

  
  
  // Owner.publish();

  // newToken.burn(newToken.supply());

  // if(!newToken.destroyed()) {
  //   newToken.destroy();
  // }

  // require(newToken.destroyed(), 'Token not destroyed');
  // commit();

  exit();
});
