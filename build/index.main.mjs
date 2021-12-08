// Automatically generated with Reach 0.1.7 (b34d92ae)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (b34d92ae)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Object({
    amount: ctc2,
    createdAt: ctc2
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      3: [ctc0, ctc1, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    amount: ctc1,
    createdAt: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Borrower(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Borrower expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Borrower expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    amount: ctc1,
    createdAt: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    borrowingAPY: ctc1,
    id: ctc4,
    lendingAPY: ctc1
    });
  const ctc6 = stdlib.T_Address;
  
  const map0 = {};
  const map0_ctc = ctc3;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc5, ctc4],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v206, v207], secs: v209, time: v208, didSend: v26, from: v205 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v40, from: v217 } = txn2;
  ;
  let v221 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v222 = v218;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v232;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 6,
      out_tys: [ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v250, v251, v252], secs: v254, time: v253, didSend: v76, from: v249 } = txn3;
    ;
    const v257 = stdlib.add(v229, v250);
    ;
    const v258 = stdlib.ge(v221, v250);
    stdlib.assert(v258, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v259 = stdlib.gt(v251, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v259, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v260 = stdlib.gt(v250, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v260, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Borrower'
      });
    const v261 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v252), null);
    let v262;
    switch (v261[0]) {
      case 'None': {
        const v263 = v261[1];
        const v265 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v262 = v265;
        
        break;
        }
      case 'Some': {
        const v266 = v261[1];
        v262 = v266;
        
        break;
        }
      }
    const v267 = v262.createdAt;
    const v268 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v268) {
      const v269 = {
        amount: v250,
        createdAt: v251
        };
      map0[v252] = v269;
      const v270 = stdlib.sub(v221, v250);
      const cv221 = v270;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    else {
      const v271 = v262.amount;
      const v272 = stdlib.add(v271, v250);
      const v273 = {
        amount: v272,
        createdAt: v251
        };
      map0[v252] = v273;
      const v274 = stdlib.sub(v221, v250);
      const cv221 = v274;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v279, time: v278, didSend: v104, from: v277 } = txn3;
  ;
  let v282 = v229;
  let v283 = v278;
  let v290 = v229;
  
  while (await (async () => {
    const v293 = stdlib.gt(v282, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v293;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 7,
      funcNum: 5,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v324, v325, v326, v327, v328, v329, v330], secs: v332, time: v331, didSend: v160, from: v323 } = txn4;
    ;
    const v334 = stdlib.ge(v324, v325);
    stdlib.assert(v334, {
      at: './index.rsh:157:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v336 = stdlib.ge(v290, v326);
    stdlib.assert(v336, {
      at: './index.rsh:158:12:application',
      fs: [],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Borrower'
      });
    const v337 = stdlib.ge(v329, v326);
    stdlib.assert(v337, {
      at: './index.rsh:159:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v339 = stdlib.ge(v290, v329);
    stdlib.assert(v339, {
      at: './index.rsh:160:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    map0[v323] = undefined;
    const v343 = stdlib.sub(v290, v329);
    ;
    const v344 = stdlib.sub(v282, v329);
    const cv282 = v344;
    const cv283 = v331;
    const cv290 = v343;
    
    v282 = cv282;
    v283 = cv283;
    v290 = cv290;
    
    continue;
    
    }
  const v349 = stdlib.sub(v290, v290);
  ;
  const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v351, {
    at: './index.rsh:172:10:application',
    fs: [],
    msg: null,
    who: 'Borrower'
    });
  return;
  
  
  
  
  
  
  };
export async function Lender(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lender expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lender expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    amount: ctc1,
    createdAt: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    borrowingAPY: ctc1,
    id: ctc4,
    lendingAPY: ctc1
    });
  const ctc6 = stdlib.T_Object({
    amount: ctc1,
    createdAt: ctc1,
    token: ctc4
    });
  const ctc7 = stdlib.T_Address;
  
  const map0 = {};
  const map0_ctc = ctc3;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc5, ctc4],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v206, v207], secs: v209, time: v208, didSend: v26, from: v205 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v206), {
    at: './index.rsh:54:30:application',
    fs: ['at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:28:function exp)'],
    msg: 'viewLendingToken',
    who: 'Lender'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v205, v207],
    evt_cnt: 0,
    funcNum: 1,
    lct: v208,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v219, time: v218, didSend: v40, from: v217 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v221 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
      const v222 = v218;
      const v229 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
        
        return v232;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc7, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v40, from: v217 } = txn2;
  ;
  let v221 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v222 = v218;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v232;})()) {
    const v233 = ctc.selfAddress();
    const v235 = stdlib.protect(ctc6, await interact.lend(), {
      at: './index.rsh:71:68:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'lend',
      who: 'Lender'
      });
    const v236 = v235.amount;
    const v237 = v235.token;
    const v238 = v235.createdAt;
    const v239 = stdlib.gt(v236, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v239, {
      at: './index.rsh:74:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v240 = stdlib.tokenEq(v237, v207);
    stdlib.assert(v240, {
      at: './index.rsh:75:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'Token not allowed',
      who: 'Lender'
      });
    const v241 = stdlib.gt(v238, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v241, {
      at: './index.rsh:76:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v242 = stdlib.ge(v221, v236);
    stdlib.assert(v242, {
      at: './index.rsh:77:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    
    const v243 = stdlib.addressEq(v233, v233);
    const v244 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v233), null);
    let v245;
    switch (v244[0]) {
      case 'None': {
        const v246 = v244[1];
        v245 = true;
        
        break;
        }
      case 'Some': {
        const v247 = v244[1];
        v245 = false;
        
        break;
        }
      }
    const v248 = v243 ? v245 : false;
    
    const txn3 = await (ctc.sendrecv({
      args: [v205, v207, v221, v229, v236, v238, v233],
      evt_cnt: 3,
      funcNum: 6,
      lct: v222,
      onlyIf: v248,
      out_tys: [ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:80:12:dot', stdlib.UInt_max, 0), [[v236, v207]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v250, v251, v252], secs: v254, time: v253, didSend: v76, from: v249 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:80:12:dot', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v257 = stdlib.add(v229, v250);
        sim_r.txns.push({
          amt: v250,
          kind: 'to',
          tok: v207
          });
        const v258 = stdlib.ge(v221, v250);
        stdlib.assert(v258, {
          at: './index.rsh:85:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v259 = stdlib.gt(v251, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
        stdlib.assert(v259, {
          at: './index.rsh:86:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v260 = stdlib.gt(v250, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v260, {
          at: './index.rsh:87:12:application',
          fs: [],
          msg: 'Amount must be greater than zero',
          who: 'Lender'
          });
        const v261 = stdlib.protect(map0_ctc, stdlib.simMapRef(sim_r, 0, v252), null);
        let v262;
        switch (v261[0]) {
          case 'None': {
            const v263 = v261[1];
            const v265 = {
              amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
              createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
              };
            v262 = v265;
            
            break;
            }
          case 'Some': {
            const v266 = v261[1];
            v262 = v266;
            
            break;
            }
          }
        const v267 = v262.createdAt;
        const v268 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
        if (v268) {
          const v269 = {
            amount: v250,
            createdAt: v251
            };
          stdlib.simMapSet(sim_r, 0, v252, v269);
          const v270 = stdlib.sub(v221, v250);
          const cv221 = v270;
          const cv222 = v253;
          const cv229 = v257;
          
          await (async () => {
            const v221 = cv221;
            const v222 = cv222;
            const v229 = cv229;
            
            if (await (async () => {
              const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
              
              return v232;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        else {
          const v271 = v262.amount;
          const v272 = stdlib.add(v271, v250);
          const v273 = {
            amount: v272,
            createdAt: v251
            };
          stdlib.simMapSet(sim_r, 0, v252, v273);
          const v274 = stdlib.sub(v221, v250);
          const cv221 = v274;
          const cv222 = v253;
          const cv229 = v257;
          
          await (async () => {
            const v221 = cv221;
            const v222 = cv222;
            const v229 = cv229;
            
            if (await (async () => {
              const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
              
              return v232;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc7, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [v250, v251, v252], secs: v254, time: v253, didSend: v76, from: v249 } = txn3;
    ;
    const v257 = stdlib.add(v229, v250);
    ;
    const v258 = stdlib.ge(v221, v250);
    stdlib.assert(v258, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v259 = stdlib.gt(v251, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v259, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v260 = stdlib.gt(v250, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v260, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v261 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v252), null);
    let v262;
    switch (v261[0]) {
      case 'None': {
        const v263 = v261[1];
        const v265 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v262 = v265;
        
        break;
        }
      case 'Some': {
        const v266 = v261[1];
        v262 = v266;
        
        break;
        }
      }
    const v267 = v262.createdAt;
    const v268 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v268) {
      const v269 = {
        amount: v250,
        createdAt: v251
        };
      map0[v252] = v269;
      const v270 = stdlib.sub(v221, v250);
      const cv221 = v270;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    else {
      const v271 = v262.amount;
      const v272 = stdlib.add(v271, v250);
      const v273 = {
        amount: v272,
        createdAt: v251
        };
      map0[v252] = v273;
      const v274 = stdlib.sub(v221, v250);
      const cv221 = v274;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v205, v207, v229],
    evt_cnt: 0,
    funcNum: 3,
    lct: v222,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v279, time: v278, didSend: v104, from: v277 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v282 = v229;
      const v283 = v278;
      const v290 = v229;
      
      if (await (async () => {
        const v293 = stdlib.gt(v282, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
        
        return v293;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v349 = stdlib.sub(v290, v290);
        sim_r.txns.push({
          amt: v290,
          kind: 'from',
          to: v205,
          tok: v207
          });
        const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v351, {
          at: './index.rsh:172:10:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v207
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc7, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v279, time: v278, didSend: v104, from: v277 } = txn3;
  ;
  let v282 = v229;
  let v283 = v278;
  let v290 = v229;
  
  while (await (async () => {
    const v293 = stdlib.gt(v282, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v293;})()) {
    const v294 = ctc.selfAddress();
    const v296 = stdlib.protect(ctc1, await interact.getDate(), {
      at: './index.rsh:125:52:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: 'getDate',
      who: 'Lender'
      });
    const v297 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v294), null);
    let v298;
    switch (v297[0]) {
      case 'None': {
        const v299 = v297[1];
        const v301 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:130:20:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:130:34:decimal', stdlib.UInt_max, 0)
          };
        v298 = v301;
        
        break;
        }
      case 'Some': {
        const v302 = v297[1];
        v298 = v302;
        
        break;
        }
      }
    const v303 = v298.amount;
    const v304 = v298.createdAt;
    const v305 = stdlib.ge(v296, v304);
    stdlib.assert(v305, {
      at: './index.rsh:136:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v307 = stdlib.ge(v290, v303);
    stdlib.assert(v307, {
      at: './index.rsh:137:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Lender'
      });
    const v308 = stdlib.sub(v296, v304);
    const v309 = v206.lendingAPY;
    const v310 = stdlib.div(v309, stdlib.checkedBigNumberify('./index.rsh:141:66:decimal', stdlib.UInt_max, 365));
    const v311 = stdlib.mul(v310, v308);
    const v312 = stdlib.div(v311, stdlib.checkedBigNumberify('./index.rsh:142:41:decimal', stdlib.UInt_max, 100));
    const v313 = stdlib.mul(v312, v303);
    const v314 = stdlib.add(v313, v303);
    stdlib.protect(ctc0, await interact.withdraw(v314), {
      at: './index.rsh:145:24:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: 'withdraw',
      who: 'Lender'
      });
    
    const v315 = stdlib.addressEq(v294, v294);
    const v316 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v294), null);
    let v317;
    switch (v316[0]) {
      case 'None': {
        const v318 = v316[1];
        v317 = false;
        
        break;
        }
      case 'Some': {
        const v319 = v316[1];
        v317 = true;
        
        break;
        }
      }
    const v320 = v315 ? v317 : false;
    const v321 = stdlib.ge(v282, v303);
    const v322 = v320 ? v321 : false;
    
    const txn4 = await (ctc.sendrecv({
      args: [v205, v207, v282, v290, v296, v304, v303, v308, v313, v314, v294],
      evt_cnt: 7,
      funcNum: 5,
      lct: v283,
      onlyIf: v322,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v324, v325, v326, v327, v328, v329, v330], secs: v332, time: v331, didSend: v160, from: v323 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v334 = stdlib.ge(v324, v325);
        stdlib.assert(v334, {
          at: './index.rsh:157:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v336 = stdlib.ge(v290, v326);
        stdlib.assert(v336, {
          at: './index.rsh:158:12:application',
          fs: [],
          msg: 'Currently not enough money to pay you, try again later.',
          who: 'Lender'
          });
        const v337 = stdlib.ge(v329, v326);
        stdlib.assert(v337, {
          at: './index.rsh:159:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v339 = stdlib.ge(v290, v329);
        stdlib.assert(v339, {
          at: './index.rsh:160:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        stdlib.simMapSet(sim_r, 0, v323, undefined);
        const v343 = stdlib.sub(v290, v329);
        sim_r.txns.push({
          amt: v329,
          kind: 'from',
          to: v330,
          tok: v207
          });
        const v344 = stdlib.sub(v282, v329);
        const cv282 = v344;
        const cv283 = v331;
        const cv290 = v343;
        
        await (async () => {
          const v282 = cv282;
          const v283 = cv283;
          const v290 = cv290;
          
          if (await (async () => {
            const v293 = stdlib.gt(v282, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
            
            return v293;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v349 = stdlib.sub(v290, v290);
            sim_r.txns.push({
              amt: v290,
              kind: 'from',
              to: v205,
              tok: v207
              });
            const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v351, {
              at: './index.rsh:172:10:application',
              fs: [],
              msg: null,
              who: 'Lender'
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v207
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc7, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [v324, v325, v326, v327, v328, v329, v330], secs: v332, time: v331, didSend: v160, from: v323 } = txn4;
    ;
    const v334 = stdlib.ge(v324, v325);
    stdlib.assert(v334, {
      at: './index.rsh:157:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v336 = stdlib.ge(v290, v326);
    stdlib.assert(v336, {
      at: './index.rsh:158:12:application',
      fs: [],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Lender'
      });
    const v337 = stdlib.ge(v329, v326);
    stdlib.assert(v337, {
      at: './index.rsh:159:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v339 = stdlib.ge(v290, v329);
    stdlib.assert(v339, {
      at: './index.rsh:160:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    map0[v323] = undefined;
    const v343 = stdlib.sub(v290, v329);
    ;
    const v344 = stdlib.sub(v282, v329);
    const cv282 = v344;
    const cv283 = v331;
    const cv290 = v343;
    
    v282 = cv282;
    v283 = cv283;
    v290 = cv290;
    
    continue;
    
    }
  const v349 = stdlib.sub(v290, v290);
  ;
  const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v351, {
    at: './index.rsh:172:10:application',
    fs: [],
    msg: null,
    who: 'Lender'
    });
  return;
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    amount: ctc1,
    createdAt: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    borrowingAPY: ctc1,
    id: ctc4,
    lendingAPY: ctc1
    });
  const ctc6 = stdlib.T_Address;
  
  const map0 = {};
  const map0_ctc = ctc3;
  
  
  const v201 = stdlib.protect(ctc4, interact.acceptToken, 'for Owner\'s interact field acceptToken');
  
  const v204 = {
    borrowingAPY: stdlib.checkedBigNumberify('./index.rsh:39:21:decimal', stdlib.UInt_max, 7),
    id: v201,
    lendingAPY: stdlib.checkedBigNumberify('./index.rsh:38:19:decimal', stdlib.UInt_max, 5)
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v204, v201],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v206, v207], secs: v209, time: v208, didSend: v26, from: v205 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v207
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v206, v207], secs: v209, time: v208, didSend: v26, from: v205 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v206), {
    at: './index.rsh:54:30:application',
    fs: ['at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:28:function exp)'],
    msg: 'viewLendingToken',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v40, from: v217 } = txn2;
  ;
  let v221 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v222 = v218;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v232 = stdlib.gt(v221, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v232;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 6,
      out_tys: [ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v250, v251, v252], secs: v254, time: v253, didSend: v76, from: v249 } = txn3;
    ;
    const v257 = stdlib.add(v229, v250);
    ;
    const v258 = stdlib.ge(v221, v250);
    stdlib.assert(v258, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v259 = stdlib.gt(v251, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v259, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v260 = stdlib.gt(v250, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v260, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Owner'
      });
    const v261 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v252), null);
    let v262;
    switch (v261[0]) {
      case 'None': {
        const v263 = v261[1];
        const v265 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v262 = v265;
        
        break;
        }
      case 'Some': {
        const v266 = v261[1];
        v262 = v266;
        
        break;
        }
      }
    const v267 = v262.createdAt;
    const v268 = stdlib.eq(v267, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v268) {
      const v269 = {
        amount: v250,
        createdAt: v251
        };
      map0[v252] = v269;
      const v270 = stdlib.sub(v221, v250);
      const cv221 = v270;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    else {
      const v271 = v262.amount;
      const v272 = stdlib.add(v271, v250);
      const v273 = {
        amount: v272,
        createdAt: v251
        };
      map0[v252] = v273;
      const v274 = stdlib.sub(v221, v250);
      const cv221 = v274;
      const cv222 = v253;
      const cv229 = v257;
      
      v221 = cv221;
      v222 = cv222;
      v229 = cv229;
      
      continue;}
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v279, time: v278, didSend: v104, from: v277 } = txn3;
  ;
  let v282 = v229;
  let v283 = v278;
  let v290 = v229;
  
  while (await (async () => {
    const v293 = stdlib.gt(v282, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v293;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 7,
      funcNum: 5,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v324, v325, v326, v327, v328, v329, v330], secs: v332, time: v331, didSend: v160, from: v323 } = txn4;
    ;
    const v334 = stdlib.ge(v324, v325);
    stdlib.assert(v334, {
      at: './index.rsh:157:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v336 = stdlib.ge(v290, v326);
    stdlib.assert(v336, {
      at: './index.rsh:158:12:application',
      fs: [],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Owner'
      });
    const v337 = stdlib.ge(v329, v326);
    stdlib.assert(v337, {
      at: './index.rsh:159:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v339 = stdlib.ge(v290, v329);
    stdlib.assert(v339, {
      at: './index.rsh:160:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    map0[v323] = undefined;
    const v343 = stdlib.sub(v290, v329);
    ;
    const v344 = stdlib.sub(v282, v329);
    const cv282 = v344;
    const cv283 = v331;
    const cv290 = v343;
    
    v282 = cv282;
    v283 = cv283;
    v290 = cv290;
    
    continue;
    
    }
  const v349 = stdlib.sub(v290, v290);
  ;
  const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v351, {
    at: './index.rsh:172:10:application',
    fs: [],
    msg: null,
    who: 'Owner'
    });
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn OnCompletion
int OptIn
==
bz normal
txn Sender
int 17
bzero
dig 1
int 1
bzero
dig 2
extract 0 17
app_local_put
pop
pop
b checkSize
normal:
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
extract 0 24
store 255
dup
int 24
extract_uint64
store 254
pop
// "CheckPay"
// "./index.rsh:43:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// Initializing token
int 100000
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CurrentApplicationAddress
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l3_makeTxnK:
pop
// "CheckPay"
// "./index.rsh:43:9:dot"
// "[]"
txn Sender
load 254
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l4_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:61:10:dot"
// "[]"
load 255
load 254
itob
concat
byte base64(AAAAABHhowA=)
global Round
itob
concat
int 8
bzero
concat
b loopBody2
l4_afterHandler1:
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:116:10:dot"
// "[]"
load 255
load 254
itob
concat
load 253
itob
global Round
itob
concat
load 253
itob
concat
b loopBody4
l6_afterHandler3:
l7_afterHandler4:
// Handler 5
dup
int 5
==
bz l8_afterHandler5
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 80
==
assert
dup
int 0
extract_uint64
store 251
dup
int 8
extract_uint64
store 250
dup
int 16
extract_uint64
store 249
dup
int 24
extract_uint64
store 248
dup
int 32
extract_uint64
store 247
dup
int 40
extract_uint64
store 246
dup
extract 48 32
store 245
pop
// "CheckPay"
// "./index.rsh:148:12:dot"
// "[]"
// Nothing
// "./index.rsh:157:12:application"
// "[]"
load 251
load 250
>=
assert
// Just "Currently not enough money to pay you, try again later."
// "./index.rsh:158:12:application"
// "[]"
load 252
load 249
>=
assert
// Nothing
// "./index.rsh:159:12:application"
// "[]"
load 246
load 249
>=
assert
// Nothing
// "./index.rsh:160:12:application"
// "[]"
load 252
load 246
>=
assert
txn Sender
dup
dup
int 1
bzero
app_local_get
swap
pop
int 17
bzero
store 244
dup
pop
load 244
swap
pop
dig 1
int 1
bzero
dig 2
extract 0 17
app_local_put
pop
pop
load 246
dup
bz l9_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 245
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l9_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
load 246
-
itob
global Round
itob
concat
load 252
load 246
-
itob
concat
b loopBody4
l8_afterHandler5:
// Handler 6
dup
int 6
==
bz l10_afterHandler6
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
int 0
extract_uint64
store 251
dup
int 8
extract_uint64
store 250
dup
extract 16 32
store 249
pop
// "CheckPay"
// "./index.rsh:80:12:dot"
// "[]"
load 252
load 251
+
store 248
// "CheckPay"
// "./index.rsh:80:12:dot"
// "[]"
load 251
dup
bz l11_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l11_checkTxnK:
pop
// Nothing
// "./index.rsh:85:12:application"
// "[]"
load 253
load 251
>=
assert
// Nothing
// "./index.rsh:86:12:application"
// "[]"
load 250
int 1000
>
assert
// Just "Amount must be greater than zero"
// "./index.rsh:87:12:application"
// "[]"
load 251
int 0
>
assert
load 249
dup
int 1
bzero
app_local_get
swap
pop
dup
store 247
int 0
getbyte
int 0
==
bz l13_switchAfterNone
int 16
bzero
store 246
l13_switchAfterNone:
load 247
int 0
getbyte
int 1
==
bz l14_switchAfterSome
load 247
extract 1 16
dup
store 245
store 246
l14_switchAfterSome:
l12_switchK:
load 246
int 8
extract_uint64
int 0
==
bz l15_ifF
load 249
dup
dup
int 1
bzero
app_local_get
swap
pop
byte base64(AQ==)
load 251
itob
load 250
itob
concat
concat
store 245
dup
pop
load 245
swap
pop
dig 1
int 1
bzero
dig 2
extract 0 17
app_local_put
pop
pop
load 255
load 254
itob
concat
load 253
load 251
-
itob
global Round
itob
concat
load 248
itob
concat
b loopBody2
l15_ifF:
load 249
dup
dup
int 1
bzero
app_local_get
swap
pop
byte base64(AQ==)
load 246
int 0
extract_uint64
load 251
+
itob
load 250
itob
concat
concat
store 245
dup
pop
load 245
swap
pop
dig 1
int 1
bzero
dig 2
extract 0 17
app_local_put
pop
pop
load 255
load 254
itob
concat
load 253
load 251
-
itob
global Round
itob
concat
load 248
itob
concat
b loopBody2
l10_afterHandler6:
int 0
assert
loopBody2:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
pop
load 255
int 0
>
bz l16_ifF
load 252
load 251
itob
concat
load 255
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 56
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l16_ifF:
load 252
load 251
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loopBody4:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
pop
load 255
int 0
>
bz l17_ifF
load 252
load 251
itob
concat
load 255
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 56
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l17_ifF:
load 253
dup
bz l18_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 252
itxn_field AssetReceiver
load 251
itxn_field XferAsset
itxn_submit
int 0
l18_makeTxnK:
pop
// Nothing
// "./index.rsh:172:10:application"
// "[]"
load 253
dup
-
int 0
==
assert
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 251
itxn_field XferAsset
itxn_submit
int 0
l19_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l20_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 1,
  mapDataSize: 17,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_borrowingAPY",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_id",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_lendingAPY",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v206",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v207",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_borrowingAPY",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_id",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_lendingAPY",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v206",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v207",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v330",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v250",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v252",
                "type": "address"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v330",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v250",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v252",
                "type": "address"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200194238038062001942833981016040819052620000269162000241565b600080554360035560408051825181526020808401518051805183850152808301516001600160a01b03908116858701529401516060840152015190911660808201527f9e88205450cb9c83892e9680e88f40c3693181177716e80525aa82995b1b9fab9060a00160405180910390a1620000a4341560076200011d565b6040805180820182526000602080830182815233808552868301518301516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200011492919062000147565b50505062000350565b81620001435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001559062000313565b90600052602060002090601f016020900481019282620001795760008555620001c4565b82601f106200019457805160ff1916838001178555620001c4565b82800160010185558215620001c4579182015b82811115620001c4578251825591602001919060010190620001a7565b50620001d2929150620001d6565b5090565b5b80821115620001d25760008155600101620001d7565b604080519081016001600160401b03811182821017156200021e57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023c57600080fd5b919050565b600081830360a08112156200025557600080fd5b6200025f620001ed565b83518152601f198201915060808212156200027957600080fd5b62000283620001ed565b60608312156200029257600080fd5b6040519250606083016001600160401b0381118482101715620002c557634e487b7160e01b600052604160045260246000fd5b806040525060208501518352620002df6040860162000224565b602084015260608501516040840152828152620002ff6080860162000224565b602082810191909152820152949350505050565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b6115e280620003606000396000f3fe60806040526004361061006e5760003560e01c806373b4522c1161004b57806373b4522c146100c157806383230757146100d4578063ab53f2c6146100e9578063bdd871511461010c57005b80631e93b0f11461007757806329dc9c151461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004611167565b61011f565b6100756100bc36600461117f565b6104e8565b6100756100cf36600461117f565b61064b565b3480156100e057600080fd5b50600154610088565b3480156100f557600080fd5b506100fe6107ae565b6040516100929291906111bd565b61007561011a3660046111f7565b61084b565b61012f600760005414601b610a76565b6101498135158061014257506001548235145b601c610a76565b60008080556002805461015b9061120a565b80601f01602080910402602001604051908101604052809291908181526020018280546101879061120a565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec91906112dc565b90506101f6610f50565b7f7c3c15cc857b172dd341dc7c535528218753423c64db3084bb7a4712dd150ae48360405161022591906112f8565b60405180910390a161023934156016610a76565b606082015161024d90602085013590611350565b815260208083015161026e91610267913391870135610aa0565b6017610a76565b6102878360200160000135836040015110156018610a76565b61029a6103e86040850135116019610a76565b6102ab60208401351515601a610a76565b6102c36102be6080850160608601611368565b610ab8565b602082018190525160009060018111156102df576102df611385565b141561030257606081018051600090819052815160200152516040820152610338565b6001602082015151600181111561031b5761031b611385565b141561033857602081015160409081015160808301819052908201525b6040810151602001516104525760a081018051602080860135909152905160408501359101526001600460006103746080870160608801611368565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156103a6576103a6611385565b021790555060a0810151600460006103c46080870160608801611368565b6001600160a01b03168152602080820192909252604001600020825160018201559101516002909101556103f6611019565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015161042a918601359061139b565b6020808301805192909252815143910152825190516040015261044c81610b8d565b50505050565b60408101515161046790602085013590611350565b60c082018051919091525160408401356020909101526001600460006104936080870160608801611368565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156104c5576104c5611385565b021790555060c0810151600460006103c46080870160608801611368565b505050565b6104f86001600054146009610a76565b6105128135158061050b57506001548235145b600a610a76565b6000808055600280546105249061120a565b80601f01602080910402602001604051908101604052809291908181526020018280546105509061120a565b801561059d5780601f106105725761010080835404028352916020019161059d565b820191906000526020600020905b81548152906001019060200180831161058057829003601f168201915b50505050508060200190518101906105b591906113b2565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516105e6919061142d565b60405180910390a16105fa34156008610a76565b610602611019565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516311e1a30090528051439201919091525160006040909101526104e381610b8d565b61065b600360005414600c610a76565b6106758135158061066e57506001548235145b600d610a76565b6000808055600280546106879061120a565b80601f01602080910402602001604051908101604052809291908181526020018280546106b39061120a565b80156107005780601f106106d557610100808354040283529160200191610700565b820191906000526020600020905b8154815290600101906020018083116106e357829003601f168201915b50505050508060200190518101906107189190611452565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c0982604051610749919061142d565b60405180910390a161075d3415600b610a76565b610765611019565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401805183850180519190915280514394019390935251915101526104e381610c91565b6000606060005460028080546107c39061120a565b80601f01602080910402602001604051908101604052809291908181526020018280546107ef9061120a565b801561083c5780601f106108115761010080835404028352916020019161083c565b820191906000526020600020905b81548152906001019060200180831161081f57829003601f168201915b50505050509050915091509091565b61085b6006600054146014610a76565b6108758135158061086e57506001548235145b6015610a76565b6000808055600280546108879061120a565b80601f01602080910402602001604051908101604052809291908181526020018280546108b39061120a565b80156109005780601f106108d557610100808354040283529160200191610900565b820191906000526020600020905b8154815290600101906020018083116108e357829003601f168201915b505050505080602001905181019061091891906112dc565b90507f6597b3f155c769cf20a050c1a223fd7424ba125b920fb9fc151c460e6b2e66968260405161094991906114cb565b60405180910390a161095d3415600f610a76565b6109736040830135602084013510156010610a76565b61098c8260200160400135826060015110156011610a76565b6109a2606083013560c084013510156012610a76565b6109bb8260200160a00135826060015110156013610a76565b3360009081526004602090815260408220805461ffff191681556001810183905560020191909155810151610a05906109fb610100850160e08601611368565b60c0850135610d56565b610a0d611019565b815181516001600160a01b039182169052602080840151835192169101526040820151610a3f9060c08501359061139b565b60208083018051929092529051439101526060820151610a649060c08501359061139b565b6020820151604001526104e381610c91565b81610a9c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000610aae83853085610d6a565b90505b9392505050565b610ac061105f565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610aef57610aef611385565b1415610b7d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b3057610b30611385565b6001811115610b4157610b41611385565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b6000815260016020820152919050565b60208101515115610c21576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260079091554360015591519091610bfd9183910161153a565b604051602081830303815290604052600290805190602001906104e3929190611098565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015182168452898501518901518352600390955543600155875193840194909452905190921694810194909452519083015290608001610bfd565b50565b60208101515115610d01576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260069091554360015591519091610bfd9183910161153a565b805160208082015191519083015160400151610d1e929190610d56565b602081015160400151610d4090600090610d38908061139b565b14600e610a76565b60008080556001819055610c8e9060029061111c565b610d61838383610e44565b6104e357600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610dd191611573565b60006040518083038185875af1925050503d8060008114610e0e576040519150601f19603f3d011682016040523d82523d6000602084013e610e13565b606091505b5091509150610e2482826001610f15565b5080806020019051810190610e39919061158f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610ea391611573565b60006040518083038185875af1925050503d8060008114610ee0576040519150601f19603f3d011682016040523d82523d6000602084013e610ee5565b606091505b5091509150610ef682826002610f15565b5080806020019051810190610f0b919061158f565b9695505050505050565b60608315610f24575081610ab1565b825115610f345782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a93565b6040518060e0016040528060008152602001610f6a61105f565b8152602001610f8c604051806040016040528060008152602001600081525090565b8152602001610fae604051806040016040528060008152602001600081525090565b8152602001610fd0604051806040016040528060008152602001600081525090565b8152602001610ff2604051806040016040528060008152602001600081525090565b8152602001611014604051806040016040528060008152602001600081525090565b905290565b6040805160808101825260009181018281526060820192909252908190815260200161101460405180606001604052806000815260200160008152602001600081525090565b60408051606081019091528060008152602001600015158152602001611014604051806040016040528060008152602001600081525090565b8280546110a49061120a565b90600052602060002090601f0160209004810192826110c6576000855561110c565b82601f106110df57805160ff191683800117855561110c565b8280016001018555821561110c579182015b8281111561110c5782518255916020019190600101906110f1565b50611118929150611152565b5090565b5080546111289061120a565b6000825580601f10611138575050565b601f016020900490600052602060002090810190610c8e91905b5b808211156111185760008155600101611153565b60006080828403121561117957600080fd5b50919050565b60006040828403121561117957600080fd5b60005b838110156111ac578181015183820152602001611194565b8381111561044c5750506000910152565b82815260406020820152600082518060408401526111e2816060850160208701611191565b601f01601f1916919091016060019392505050565b6000610100828403121561117957600080fd5b600181811c9082168061121e57607f821691505b6020821081141561117957634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610c8e57600080fd5b60006080828403121561126657600080fd5b6040516080810181811067ffffffffffffffff8211171561129757634e487b7160e01b600052604160045260246000fd5b806040525080915082516112aa8161123f565b815260208301516112ba8161123f565b8060208301525060408301516040820152606083015160608201525092915050565b6000608082840312156112ee57600080fd5b610ab18383611254565b8135815260208083013590820152604080830135908201526080810160608301356113228161123f565b6001600160a01b031660609290920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113635761136361133a565b500190565b60006020828403121561137a57600080fd5b8135610ab18161123f565b634e487b7160e01b600052602160045260246000fd5b6000828210156113ad576113ad61133a565b500390565b6000604082840312156113c457600080fd5b6040516040810181811067ffffffffffffffff821117156113f557634e487b7160e01b600052604160045260246000fd5b60405282516114038161123f565b815260208301516114138161123f565b60208201529392505050565b8015158114610c8e57600080fd5b813581526040810160208301356114438161141f565b80151560208401525092915050565b60006060828403121561146457600080fd5b6040516060810181811067ffffffffffffffff8211171561149557634e487b7160e01b600052604160045260246000fd5b60405282516114a38161123f565b815260208301516114b38161123f565b60208201526040928301519281019290925250919050565b600061010082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e08301356115228161123f565b6001600160a01b031660e09290920191909152919050565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060918201519181019190915260800190565b60008251611585818460208701611191565b9190910192915050565b6000602082840312156115a157600080fd5b8151610ab18161141f56fea26469706673582212208b9cda1b190b3f0e528cca426591d16d8acfc9d6763c41aed70eb30e7cf3ae3a64736f6c63430008090033`,
  BytecodeLen: 6466,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Borrower": Borrower,
  "Lender": Lender,
  "Owner": Owner
  };
export const _APIs = {
  };
