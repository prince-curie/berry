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
  const {data: [v214, v215], secs: v217, time: v216, didSend: v26, from: v213 } = txn1;
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
  const {data: [], secs: v227, time: v226, didSend: v40, from: v225 } = txn2;
  ;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v230 = v226;
  let v237 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v240;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 6,
      out_tys: [ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v258, v259, v260], secs: v262, time: v261, didSend: v76, from: v257 } = txn3;
    ;
    const v265 = stdlib.add(v237, v258);
    ;
    const v266 = stdlib.ge(v229, v258);
    stdlib.assert(v266, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v267 = stdlib.gt(v259, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v267, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v268 = stdlib.gt(v258, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v268, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Borrower'
      });
    const v269 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v260), null);
    let v270;
    switch (v269[0]) {
      case 'None': {
        const v271 = v269[1];
        const v273 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v270 = v273;
        
        break;
        }
      case 'Some': {
        const v274 = v269[1];
        v270 = v274;
        
        break;
        }
      }
    const v275 = v270.createdAt;
    const v276 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v276) {
      const v277 = {
        amount: v258,
        createdAt: v259
        };
      map0[v260] = v277;
      const v278 = stdlib.sub(v229, v258);
      const cv229 = v278;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
      continue;}
    else {
      const v279 = v270.amount;
      const v280 = stdlib.add(v279, v258);
      const v281 = {
        amount: v280,
        createdAt: v259
        };
      map0[v260] = v281;
      const v282 = stdlib.sub(v229, v258);
      const cv229 = v282;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
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
  const {data: [], secs: v287, time: v286, didSend: v104, from: v285 } = txn3;
  ;
  let v290 = v237;
  let v291 = v286;
  let v298 = v237;
  
  while (await (async () => {
    const v301 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v301;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 7,
      funcNum: 5,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v336, v337, v338, v339, v340, v341, v342], secs: v344, time: v343, didSend: v164, from: v335 } = txn4;
    ;
    const v346 = stdlib.gt(v337, stdlib.checkedBigNumberify('./index.rsh:163:29:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v346, {
      at: './index.rsh:163:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v347 = stdlib.ge(v336, v337);
    stdlib.assert(v347, {
      at: './index.rsh:164:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v348 = stdlib.gt(v338, stdlib.checkedBigNumberify('./index.rsh:165:31:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v348, {
      at: './index.rsh:165:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v350 = stdlib.ge(v298, v338);
    stdlib.assert(v350, {
      at: './index.rsh:166:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v351 = stdlib.ge(v341, v338);
    stdlib.assert(v351, {
      at: './index.rsh:167:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v352 = stdlib.gt(v290, v338);
    stdlib.assert(v352, {
      at: './index.rsh:168:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v354 = stdlib.ge(v298, v341);
    stdlib.assert(v354, {
      at: './index.rsh:169:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    const v355 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:170:27:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v355, {
      at: './index.rsh:170:12:application',
      fs: [],
      msg: null,
      who: 'Borrower'
      });
    map0[v335] = undefined;
    const v359 = stdlib.sub(v298, v341);
    ;
    const v360 = stdlib.sub(v290, v341);
    const cv290 = v360;
    const cv291 = v343;
    const cv298 = v359;
    
    v290 = cv290;
    v291 = cv291;
    v298 = cv298;
    
    continue;
    
    }
  const v365 = stdlib.sub(v298, v298);
  ;
  const v367 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:182:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v367, {
    at: './index.rsh:182:10:application',
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
  const {data: [v214, v215], secs: v217, time: v216, didSend: v26, from: v213 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v214), {
    at: './index.rsh:54:30:application',
    fs: ['at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:28:function exp)'],
    msg: 'viewLendingToken',
    who: 'Lender'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v213, v215],
    evt_cnt: 0,
    funcNum: 1,
    lct: v216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v227, time: v226, didSend: v40, from: v225 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v229 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
      const v230 = v226;
      const v237 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
        
        return v240;})()) {
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
  const {data: [], secs: v227, time: v226, didSend: v40, from: v225 } = txn2;
  ;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v230 = v226;
  let v237 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v240;})()) {
    const v241 = ctc.selfAddress();
    const v243 = stdlib.protect(ctc6, await interact.lend(), {
      at: './index.rsh:71:68:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'lend',
      who: 'Lender'
      });
    const v244 = v243.amount;
    const v245 = v243.token;
    const v246 = v243.createdAt;
    const v247 = stdlib.gt(v244, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v247, {
      at: './index.rsh:74:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v248 = stdlib.tokenEq(v245, v215);
    stdlib.assert(v248, {
      at: './index.rsh:75:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: 'Token not allowed',
      who: 'Lender'
      });
    const v249 = stdlib.gt(v246, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v249, {
      at: './index.rsh:76:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v250 = stdlib.ge(v229, v244);
    stdlib.assert(v250, {
      at: './index.rsh:77:13:application',
      fs: ['at ./index.rsh:69:16:application call to [unknown function] (defined at: ./index.rsh:69:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    
    const v251 = stdlib.addressEq(v241, v241);
    const v252 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v241), null);
    let v253;
    switch (v252[0]) {
      case 'None': {
        const v254 = v252[1];
        v253 = true;
        
        break;
        }
      case 'Some': {
        const v255 = v252[1];
        v253 = false;
        
        break;
        }
      }
    const v256 = v251 ? v253 : false;
    
    const txn3 = await (ctc.sendrecv({
      args: [v213, v215, v229, v237, v244, v246, v241],
      evt_cnt: 3,
      funcNum: 6,
      lct: v230,
      onlyIf: v256,
      out_tys: [ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:80:12:dot', stdlib.UInt_max, 0), [[v244, v215]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v258, v259, v260], secs: v262, time: v261, didSend: v76, from: v257 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:80:12:dot', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v265 = stdlib.add(v237, v258);
        sim_r.txns.push({
          amt: v258,
          kind: 'to',
          tok: v215
          });
        const v266 = stdlib.ge(v229, v258);
        stdlib.assert(v266, {
          at: './index.rsh:85:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v267 = stdlib.gt(v259, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
        stdlib.assert(v267, {
          at: './index.rsh:86:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v268 = stdlib.gt(v258, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v268, {
          at: './index.rsh:87:12:application',
          fs: [],
          msg: 'Amount must be greater than zero',
          who: 'Lender'
          });
        const v269 = stdlib.protect(map0_ctc, stdlib.simMapRef(sim_r, 0, v260), null);
        let v270;
        switch (v269[0]) {
          case 'None': {
            const v271 = v269[1];
            const v273 = {
              amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
              createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
              };
            v270 = v273;
            
            break;
            }
          case 'Some': {
            const v274 = v269[1];
            v270 = v274;
            
            break;
            }
          }
        const v275 = v270.createdAt;
        const v276 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
        if (v276) {
          const v277 = {
            amount: v258,
            createdAt: v259
            };
          stdlib.simMapSet(sim_r, 0, v260, v277);
          const v278 = stdlib.sub(v229, v258);
          const cv229 = v278;
          const cv230 = v261;
          const cv237 = v265;
          
          await (async () => {
            const v229 = cv229;
            const v230 = cv230;
            const v237 = cv237;
            
            if (await (async () => {
              const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
              
              return v240;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        else {
          const v279 = v270.amount;
          const v280 = stdlib.add(v279, v258);
          const v281 = {
            amount: v280,
            createdAt: v259
            };
          stdlib.simMapSet(sim_r, 0, v260, v281);
          const v282 = stdlib.sub(v229, v258);
          const cv229 = v282;
          const cv230 = v261;
          const cv237 = v265;
          
          await (async () => {
            const v229 = cv229;
            const v230 = cv230;
            const v237 = cv237;
            
            if (await (async () => {
              const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
              
              return v240;})()) {
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
    const {data: [v258, v259, v260], secs: v262, time: v261, didSend: v76, from: v257 } = txn3;
    ;
    const v265 = stdlib.add(v237, v258);
    ;
    const v266 = stdlib.ge(v229, v258);
    stdlib.assert(v266, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v267 = stdlib.gt(v259, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v267, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v268 = stdlib.gt(v258, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v268, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v269 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v260), null);
    let v270;
    switch (v269[0]) {
      case 'None': {
        const v271 = v269[1];
        const v273 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v270 = v273;
        
        break;
        }
      case 'Some': {
        const v274 = v269[1];
        v270 = v274;
        
        break;
        }
      }
    const v275 = v270.createdAt;
    const v276 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v276) {
      const v277 = {
        amount: v258,
        createdAt: v259
        };
      map0[v260] = v277;
      const v278 = stdlib.sub(v229, v258);
      const cv229 = v278;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
      continue;}
    else {
      const v279 = v270.amount;
      const v280 = stdlib.add(v279, v258);
      const v281 = {
        amount: v280,
        createdAt: v259
        };
      map0[v260] = v281;
      const v282 = stdlib.sub(v229, v258);
      const cv229 = v282;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
      continue;}
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v213, v215, v237],
    evt_cnt: 0,
    funcNum: 3,
    lct: v230,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v287, time: v286, didSend: v104, from: v285 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v290 = v237;
      const v291 = v286;
      const v298 = v237;
      
      if (await (async () => {
        const v301 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
        
        return v301;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v365 = stdlib.sub(v298, v298);
        sim_r.txns.push({
          amt: v298,
          kind: 'from',
          to: v213,
          tok: v215
          });
        const v367 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:182:46:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v367, {
          at: './index.rsh:182:10:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v215
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
  const {data: [], secs: v287, time: v286, didSend: v104, from: v285 } = txn3;
  ;
  let v290 = v237;
  let v291 = v286;
  let v298 = v237;
  
  while (await (async () => {
    const v301 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v301;})()) {
    const v302 = ctc.selfAddress();
    const v304 = stdlib.protect(ctc1, await interact.getDate(), {
      at: './index.rsh:125:52:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: 'getDate',
      who: 'Lender'
      });
    const v305 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v302), null);
    let v306;
    switch (v305[0]) {
      case 'None': {
        const v307 = v305[1];
        const v309 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:130:20:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:130:34:decimal', stdlib.UInt_max, 0)
          };
        v306 = v309;
        
        break;
        }
      case 'Some': {
        const v310 = v305[1];
        v306 = v310;
        
        break;
        }
      }
    const v311 = v306.amount;
    const v312 = v306.createdAt;
    const v313 = stdlib.gt(v312, stdlib.checkedBigNumberify('./index.rsh:136:30:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v313, {
      at: './index.rsh:136:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v314 = stdlib.ge(v304, v312);
    stdlib.assert(v314, {
      at: './index.rsh:137:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v315 = stdlib.gt(v311, stdlib.checkedBigNumberify('./index.rsh:138:32:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v315, {
      at: './index.rsh:138:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v316 = stdlib.gt(v290, v311);
    stdlib.assert(v316, {
      at: './index.rsh:139:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v317 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:140:28:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v317, {
      at: './index.rsh:140:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v319 = stdlib.ge(v298, v311);
    stdlib.assert(v319, {
      at: './index.rsh:141:13:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v320 = stdlib.sub(v304, v312);
    const v321 = v214.lendingAPY;
    const v322 = stdlib.div(v321, stdlib.checkedBigNumberify('./index.rsh:145:66:decimal', stdlib.UInt_max, 365));
    const v323 = stdlib.mul(v322, v320);
    const v324 = stdlib.div(v323, stdlib.checkedBigNumberify('./index.rsh:146:41:decimal', stdlib.UInt_max, 100));
    const v325 = stdlib.mul(v324, v311);
    const v326 = stdlib.add(v325, v311);
    stdlib.protect(ctc0, await interact.withdraw(v326), {
      at: './index.rsh:149:24:application',
      fs: ['at ./index.rsh:123:16:application call to [unknown function] (defined at: ./index.rsh:123:20:function exp)'],
      msg: 'withdraw',
      who: 'Lender'
      });
    
    const v327 = stdlib.addressEq(v302, v302);
    const v328 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v302), null);
    let v329;
    switch (v328[0]) {
      case 'None': {
        const v330 = v328[1];
        v329 = false;
        
        break;
        }
      case 'Some': {
        const v331 = v328[1];
        v329 = true;
        
        break;
        }
      }
    const v332 = v327 ? v329 : false;
    const v334 = v332 ? v316 : false;
    
    const txn4 = await (ctc.sendrecv({
      args: [v213, v215, v290, v298, v304, v312, v311, v320, v325, v326, v302],
      evt_cnt: 7,
      funcNum: 5,
      lct: v291,
      onlyIf: v334,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v336, v337, v338, v339, v340, v341, v342], secs: v344, time: v343, didSend: v164, from: v335 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v346 = stdlib.gt(v337, stdlib.checkedBigNumberify('./index.rsh:163:29:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v346, {
          at: './index.rsh:163:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v347 = stdlib.ge(v336, v337);
        stdlib.assert(v347, {
          at: './index.rsh:164:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v348 = stdlib.gt(v338, stdlib.checkedBigNumberify('./index.rsh:165:31:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v348, {
          at: './index.rsh:165:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v350 = stdlib.ge(v298, v338);
        stdlib.assert(v350, {
          at: './index.rsh:166:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v351 = stdlib.ge(v341, v338);
        stdlib.assert(v351, {
          at: './index.rsh:167:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v352 = stdlib.gt(v290, v338);
        stdlib.assert(v352, {
          at: './index.rsh:168:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v354 = stdlib.ge(v298, v341);
        stdlib.assert(v354, {
          at: './index.rsh:169:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        stdlib.assert(v317, {
          at: './index.rsh:170:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        stdlib.simMapSet(sim_r, 0, v335, undefined);
        const v359 = stdlib.sub(v298, v341);
        sim_r.txns.push({
          amt: v341,
          kind: 'from',
          to: v342,
          tok: v215
          });
        const v360 = stdlib.sub(v290, v341);
        const cv290 = v360;
        const cv291 = v343;
        const cv298 = v359;
        
        await (async () => {
          const v290 = cv290;
          const v291 = cv291;
          const v298 = cv298;
          
          if (await (async () => {
            const v301 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
            
            return v301;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v365 = stdlib.sub(v298, v298);
            sim_r.txns.push({
              amt: v298,
              kind: 'from',
              to: v213,
              tok: v215
              });
            const v367 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:182:46:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v367, {
              at: './index.rsh:182:10:application',
              fs: [],
              msg: null,
              who: 'Lender'
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v215
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
    const {data: [v336, v337, v338, v339, v340, v341, v342], secs: v344, time: v343, didSend: v164, from: v335 } = txn4;
    ;
    const v346 = stdlib.gt(v337, stdlib.checkedBigNumberify('./index.rsh:163:29:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v346, {
      at: './index.rsh:163:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v347 = stdlib.ge(v336, v337);
    stdlib.assert(v347, {
      at: './index.rsh:164:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v348 = stdlib.gt(v338, stdlib.checkedBigNumberify('./index.rsh:165:31:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v348, {
      at: './index.rsh:165:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v350 = stdlib.ge(v298, v338);
    stdlib.assert(v350, {
      at: './index.rsh:166:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v351 = stdlib.ge(v341, v338);
    stdlib.assert(v351, {
      at: './index.rsh:167:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v352 = stdlib.gt(v290, v338);
    stdlib.assert(v352, {
      at: './index.rsh:168:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v354 = stdlib.ge(v298, v341);
    stdlib.assert(v354, {
      at: './index.rsh:169:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    stdlib.assert(v317, {
      at: './index.rsh:170:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    map0[v335] = undefined;
    const v359 = stdlib.sub(v298, v341);
    ;
    const v360 = stdlib.sub(v290, v341);
    const cv290 = v360;
    const cv291 = v343;
    const cv298 = v359;
    
    v290 = cv290;
    v291 = cv291;
    v298 = cv298;
    
    continue;
    
    }
  const v365 = stdlib.sub(v298, v298);
  ;
  const v367 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:182:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v367, {
    at: './index.rsh:182:10:application',
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
  
  
  const v209 = stdlib.protect(ctc4, interact.acceptToken, 'for Owner\'s interact field acceptToken');
  
  const v212 = {
    borrowingAPY: stdlib.checkedBigNumberify('./index.rsh:39:21:decimal', stdlib.UInt_max, 7),
    id: v209,
    lendingAPY: stdlib.checkedBigNumberify('./index.rsh:38:19:decimal', stdlib.UInt_max, 5)
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v212, v209],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v214, v215], secs: v217, time: v216, didSend: v26, from: v213 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v215
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
  const {data: [v214, v215], secs: v217, time: v216, didSend: v26, from: v213 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v214), {
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
  const {data: [], secs: v227, time: v226, didSend: v40, from: v225 } = txn2;
  ;
  let v229 = stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, 300000000);
  let v230 = v226;
  let v237 = stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v240 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, 0));
    
    return v240;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 6,
      out_tys: [ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v258, v259, v260], secs: v262, time: v261, didSend: v76, from: v257 } = txn3;
    ;
    const v265 = stdlib.add(v237, v258);
    ;
    const v266 = stdlib.ge(v229, v258);
    stdlib.assert(v266, {
      at: './index.rsh:85:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v267 = stdlib.gt(v259, stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v267, {
      at: './index.rsh:86:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v268 = stdlib.gt(v258, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v268, {
      at: './index.rsh:87:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Owner'
      });
    const v269 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v260), null);
    let v270;
    switch (v269[0]) {
      case 'None': {
        const v271 = v269[1];
        const v273 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, 0)
          };
        v270 = v273;
        
        break;
        }
      case 'Some': {
        const v274 = v269[1];
        v270 = v274;
        
        break;
        }
      }
    const v275 = v270.createdAt;
    const v276 = stdlib.eq(v275, stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, 0));
    if (v276) {
      const v277 = {
        amount: v258,
        createdAt: v259
        };
      map0[v260] = v277;
      const v278 = stdlib.sub(v229, v258);
      const cv229 = v278;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
      continue;}
    else {
      const v279 = v270.amount;
      const v280 = stdlib.add(v279, v258);
      const v281 = {
        amount: v280,
        createdAt: v259
        };
      map0[v260] = v281;
      const v282 = stdlib.sub(v229, v258);
      const cv229 = v282;
      const cv230 = v261;
      const cv237 = v265;
      
      v229 = cv229;
      v230 = cv230;
      v237 = cv237;
      
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
  const {data: [], secs: v287, time: v286, didSend: v104, from: v285 } = txn3;
  ;
  let v290 = v237;
  let v291 = v286;
  let v298 = v237;
  
  while (await (async () => {
    const v301 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:120:23:decimal', stdlib.UInt_max, 0));
    
    return v301;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 7,
      funcNum: 5,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v336, v337, v338, v339, v340, v341, v342], secs: v344, time: v343, didSend: v164, from: v335 } = txn4;
    ;
    const v346 = stdlib.gt(v337, stdlib.checkedBigNumberify('./index.rsh:163:29:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v346, {
      at: './index.rsh:163:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v347 = stdlib.ge(v336, v337);
    stdlib.assert(v347, {
      at: './index.rsh:164:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v348 = stdlib.gt(v338, stdlib.checkedBigNumberify('./index.rsh:165:31:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v348, {
      at: './index.rsh:165:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v350 = stdlib.ge(v298, v338);
    stdlib.assert(v350, {
      at: './index.rsh:166:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v351 = stdlib.ge(v341, v338);
    stdlib.assert(v351, {
      at: './index.rsh:167:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v352 = stdlib.gt(v290, v338);
    stdlib.assert(v352, {
      at: './index.rsh:168:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v354 = stdlib.ge(v298, v341);
    stdlib.assert(v354, {
      at: './index.rsh:169:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v355 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:170:27:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v355, {
      at: './index.rsh:170:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    map0[v335] = undefined;
    const v359 = stdlib.sub(v298, v341);
    ;
    const v360 = stdlib.sub(v290, v341);
    const cv290 = v360;
    const cv291 = v343;
    const cv298 = v359;
    
    v290 = cv290;
    v291 = cv291;
    v298 = cv298;
    
    continue;
    
    }
  const v365 = stdlib.sub(v298, v298);
  ;
  const v367 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:182:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v367, {
    at: './index.rsh:182:10:application',
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
// "./index.rsh:152:12:dot"
// "[]"
// Nothing
// "./index.rsh:163:12:application"
// "[]"
load 250
int 0
>
assert
// Nothing
// "./index.rsh:164:12:application"
// "[]"
load 251
load 250
>=
assert
// Nothing
// "./index.rsh:165:12:application"
// "[]"
load 249
int 0
>
assert
// Nothing
// "./index.rsh:166:12:application"
// "[]"
load 252
load 249
>=
assert
// Nothing
// "./index.rsh:167:12:application"
// "[]"
load 246
load 249
>=
assert
// Nothing
// "./index.rsh:168:12:application"
// "[]"
load 253
load 249
>
assert
// Nothing
// "./index.rsh:169:12:application"
// "[]"
load 252
load 246
>=
assert
// Nothing
// "./index.rsh:170:12:application"
// "[]"
load 253
int 0
>
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
// "./index.rsh:182:10:application"
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
                "name": "v214",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v215",
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
                "name": "v214",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v215",
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
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v340",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v342",
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
                "name": "v258",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v260",
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
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v340",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v342",
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
                "name": "v258",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v260",
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
  Bytecode: `0x60806040526040516200198e3803806200198e833981016040819052620000269162000241565b600080554360035560408051825181526020808401518051805183850152808301516001600160a01b03908116858701529401516060840152015190911660808201527f9e88205450cb9c83892e9680e88f40c3693181177716e80525aa82995b1b9fab9060a00160405180910390a1620000a4341560076200011d565b6040805180820182526000602080830182815233808552868301518301516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200011492919062000147565b50505062000350565b81620001435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001559062000313565b90600052602060002090601f016020900481019282620001795760008555620001c4565b82601f106200019457805160ff1916838001178555620001c4565b82800160010185558215620001c4579182015b82811115620001c4578251825591602001919060010190620001a7565b50620001d2929150620001d6565b5090565b5b80821115620001d25760008155600101620001d7565b604080519081016001600160401b03811182821017156200021e57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023c57600080fd5b919050565b600081830360a08112156200025557600080fd5b6200025f620001ed565b83518152601f198201915060808212156200027957600080fd5b62000283620001ed565b60608312156200029257600080fd5b6040519250606083016001600160401b0381118482101715620002c557634e487b7160e01b600052604160045260246000fd5b806040525060208501518352620002df6040860162000224565b602084015260608501516040840152828152620002ff6080860162000224565b602082810191909152820152949350505050565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b61162e80620003606000396000f3fe60806040526004361061006e5760003560e01c806373b4522c1161004b57806373b4522c146100c157806383230757146100d4578063ab53f2c6146100e9578063bdd871511461010c57005b80631e93b0f11461007757806329dc9c151461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a93660046111b3565b61011f565b6100756100bc3660046111cb565b6104e8565b6100756100cf3660046111cb565b61064b565b3480156100e057600080fd5b50600154610088565b3480156100f557600080fd5b506100fe6107ae565b604051610092929190611209565b61007561011a366004611243565b61084b565b61012f600760005414601f610ac2565b6101498135158061014257506001548235145b6020610ac2565b60008080556002805461015b90611256565b80601f016020809104026020016040519081016040528092919081815260200182805461018790611256565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190611328565b90506101f6610f9c565b7f7c3c15cc857b172dd341dc7c535528218753423c64db3084bb7a4712dd150ae4836040516102259190611344565b60405180910390a16102393415601a610ac2565b606082015161024d9060208501359061139c565b815260208083015161026e91610267913391870135610aec565b601b610ac2565b610287836020016000013583604001511015601c610ac2565b61029a6103e8604085013511601d610ac2565b6102ab60208401351515601e610ac2565b6102c36102be60808501606086016113b4565b610b04565b602082018190525160009060018111156102df576102df6113d1565b141561030257606081018051600090819052815160200152516040820152610338565b6001602082015151600181111561031b5761031b6113d1565b141561033857602081015160409081015160808301819052908201525b6040810151602001516104525760a0810180516020808601359091529051604085013591015260016004600061037460808701606088016113b4565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156103a6576103a66113d1565b021790555060a0810151600460006103c460808701606088016113b4565b6001600160a01b03168152602080820192909252604001600020825160018201559101516002909101556103f6611065565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015161042a91860135906113e7565b6020808301805192909252815143910152825190516040015261044c81610bd9565b50505050565b6040810151516104679060208501359061139c565b60c0820180519190915251604084013560209091015260016004600061049360808701606088016113b4565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156104c5576104c56113d1565b021790555060c0810151600460006103c460808701606088016113b4565b505050565b6104f86001600054146009610ac2565b6105128135158061050b57506001548235145b600a610ac2565b60008080556002805461052490611256565b80601f016020809104026020016040519081016040528092919081815260200182805461055090611256565b801561059d5780601f106105725761010080835404028352916020019161059d565b820191906000526020600020905b81548152906001019060200180831161058057829003601f168201915b50505050508060200190518101906105b591906113fe565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516105e69190611479565b60405180910390a16105fa34156008610ac2565b610602611065565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516311e1a30090528051439201919091525160006040909101526104e381610bd9565b61065b600360005414600c610ac2565b6106758135158061066e57506001548235145b600d610ac2565b60008080556002805461068790611256565b80601f01602080910402602001604051908101604052809291908181526020018280546106b390611256565b80156107005780601f106106d557610100808354040283529160200191610700565b820191906000526020600020905b8154815290600101906020018083116106e357829003601f168201915b5050505050806020019051810190610718919061149e565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516107499190611479565b60405180910390a161075d3415600b610ac2565b610765611065565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401805183850180519190915280514394019390935251915101526104e381610cdd565b6000606060005460028080546107c390611256565b80601f01602080910402602001604051908101604052809291908181526020018280546107ef90611256565b801561083c5780601f106108115761010080835404028352916020019161083c565b820191906000526020600020905b81548152906001019060200180831161081f57829003601f168201915b50505050509050915091509091565b61085b6006600054146018610ac2565b6108758135158061086e57506001548235145b6019610ac2565b60008080556002805461088790611256565b80601f01602080910402602001604051908101604052809291908181526020018280546108b390611256565b80156109005780601f106108d557610100808354040283529160200191610900565b820191906000526020600020905b8154815290600101906020018083116108e357829003601f168201915b50505050508060200190518101906109189190611328565b90507f6597b3f155c769cf20a050c1a223fd7424ba125b920fb9fc151c460e6b2e6696826040516109499190611517565b60405180910390a161095d3415600f610ac2565b61096e604083013515156010610ac2565b6109846040830135602084013510156011610ac2565b610995606083013515156012610ac2565b6109ae8260200160400135826060015110156013610ac2565b6109c4606083013560c084013510156014610ac2565b6109dc82602001604001358260400151116015610ac2565b6109f58260200160a00135826060015110156016610ac2565b610a0760008260400151116017610ac2565b3360009081526004602090815260408220805461ffff191681556001810183905560020191909155810151610a5190610a47610100850160e086016113b4565b60c0850135610da2565b610a59611065565b815181516001600160a01b039182169052602080840151835192169101526040820151610a8b9060c0850135906113e7565b60208083018051929092529051439101526060820151610ab09060c0850135906113e7565b6020820151604001526104e381610cdd565b81610ae85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000610afa83853085610db6565b90505b9392505050565b610b0c6110ab565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610b3b57610b3b6113d1565b1415610bc9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b7c57610b7c6113d1565b6001811115610b8d57610b8d6113d1565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b6000815260016020820152919050565b60208101515115610c6d576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260079091554360015591519091610c4991839101611586565b604051602081830303815290604052600290805190602001906104e39291906110e4565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015182168452898501518901518352600390955543600155875193840194909452905190921694810194909452519083015290608001610c49565b50565b60208101515115610d4d576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260069091554360015591519091610c4991839101611586565b805160208082015191519083015160400151610d6a929190610da2565b602081015160400151610d8c90600090610d8490806113e7565b14600e610ac2565b60008080556001819055610cda90600290611168565b610dad838383610e90565b6104e357600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610e1d916115bf565b60006040518083038185875af1925050503d8060008114610e5a576040519150601f19603f3d011682016040523d82523d6000602084013e610e5f565b606091505b5091509150610e7082826001610f61565b5080806020019051810190610e8591906115db565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610eef916115bf565b60006040518083038185875af1925050503d8060008114610f2c576040519150601f19603f3d011682016040523d82523d6000602084013e610f31565b606091505b5091509150610f4282826002610f61565b5080806020019051810190610f5791906115db565b9695505050505050565b60608315610f70575081610afd565b825115610f805782518084602001fd5b60405163100960cb60e01b815260048101839052602401610adf565b6040518060e0016040528060008152602001610fb66110ab565b8152602001610fd8604051806040016040528060008152602001600081525090565b8152602001610ffa604051806040016040528060008152602001600081525090565b815260200161101c604051806040016040528060008152602001600081525090565b815260200161103e604051806040016040528060008152602001600081525090565b8152602001611060604051806040016040528060008152602001600081525090565b905290565b6040805160808101825260009181018281526060820192909252908190815260200161106060405180606001604052806000815260200160008152602001600081525090565b60408051606081019091528060008152602001600015158152602001611060604051806040016040528060008152602001600081525090565b8280546110f090611256565b90600052602060002090601f0160209004810192826111125760008555611158565b82601f1061112b57805160ff1916838001178555611158565b82800160010185558215611158579182015b8281111561115857825182559160200191906001019061113d565b5061116492915061119e565b5090565b50805461117490611256565b6000825580601f10611184575050565b601f016020900490600052602060002090810190610cda91905b5b80821115611164576000815560010161119f565b6000608082840312156111c557600080fd5b50919050565b6000604082840312156111c557600080fd5b60005b838110156111f85781810151838201526020016111e0565b8381111561044c5750506000910152565b828152604060208201526000825180604084015261122e8160608501602087016111dd565b601f01601f1916919091016060019392505050565b600061010082840312156111c557600080fd5b600181811c9082168061126a57607f821691505b602082108114156111c557634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610cda57600080fd5b6000608082840312156112b257600080fd5b6040516080810181811067ffffffffffffffff821117156112e357634e487b7160e01b600052604160045260246000fd5b806040525080915082516112f68161128b565b815260208301516113068161128b565b8060208301525060408301516040820152606083015160608201525092915050565b60006080828403121561133a57600080fd5b610afd83836112a0565b81358152602080830135908201526040808301359082015260808101606083013561136e8161128b565b6001600160a01b031660609290920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113af576113af611386565b500190565b6000602082840312156113c657600080fd5b8135610afd8161128b565b634e487b7160e01b600052602160045260246000fd5b6000828210156113f9576113f9611386565b500390565b60006040828403121561141057600080fd5b6040516040810181811067ffffffffffffffff8211171561144157634e487b7160e01b600052604160045260246000fd5b604052825161144f8161128b565b8152602083015161145f8161128b565b60208201529392505050565b8015158114610cda57600080fd5b8135815260408101602083013561148f8161146b565b80151560208401525092915050565b6000606082840312156114b057600080fd5b6040516060810181811067ffffffffffffffff821117156114e157634e487b7160e01b600052604160045260246000fd5b60405282516114ef8161128b565b815260208301516114ff8161128b565b60208201526040928301519281019290925250919050565b600061010082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013561156e8161128b565b6001600160a01b031660e09290920191909152919050565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060918201519181019190915260800190565b600082516115d18184602087016111dd565b9190910192915050565b6000602082840312156115ed57600080fd5b8151610afd8161146b56fea264697066735822122011d5b752ebe8b349ef4208b9a46558bc26a2c3356b64373a526260e4c35c213c64736f6c63430008090033`,
  BytecodeLen: 6542,
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
