// Automatically generated with Reach 0.1.7 (0dfb2f8b)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (0dfb2f8b)';
export const _backendVersion = 7;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
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
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc5, ctc4],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v210, v211], secs: v213, time: v212, didSend: v30, from: v209 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v210), {
    at: './index.rsh:49:30:application',
    fs: ['at ./index.rsh:48:7:application call to [unknown function] (defined at: ./index.rsh:48:28:function exp)'],
    msg: 'viewLendingToken',
    who: 'Lender'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v209, v211],
    evt_cnt: 0,
    funcNum: 1,
    lct: v212,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v223, time: v222, didSend: v44, from: v221 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:56:10:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v225 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, 3000);
      const v226 = v222;
      const v233 = stdlib.checkedBigNumberify('./index.rsh:38:9:dot', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v236 = stdlib.gt(v225, stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, 0));
        
        return v236;})()) {
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
  const {data: [], secs: v223, time: v222, didSend: v44, from: v221 } = txn2;
  ;
  let v225 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, 3000);
  let v226 = v222;
  let v233 = stdlib.checkedBigNumberify('./index.rsh:38:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v236 = stdlib.gt(v225, stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, 0));
    
    return v236;})()) {
    const v237 = ctc.selfAddress();
    const v239 = stdlib.protect(ctc6, await interact.lend(), {
      at: './index.rsh:66:68:application',
      fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
      msg: 'lend',
      who: 'Lender'
      });
    const v240 = v239.amount;
    const v241 = v239.token;
    const v242 = v239.createdAt;
    const v243 = stdlib.gt(v240, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v243, {
      at: './index.rsh:69:13:application',
      fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v244 = stdlib.tokenEq(v241, v211);
    stdlib.assert(v244, {
      at: './index.rsh:70:13:application',
      fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
      msg: 'Token not allowed',
      who: 'Lender'
      });
    const v245 = stdlib.gt(v242, stdlib.checkedBigNumberify('./index.rsh:71:26:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v245, {
      at: './index.rsh:71:13:application',
      fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v246 = stdlib.ge(v225, v240);
    stdlib.assert(v246, {
      at: './index.rsh:72:13:application',
      fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    
    const v247 = stdlib.addressEq(v237, v237);
    const v248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v237), null);
    let v249;
    switch (v248[0]) {
      case 'None': {
        const v250 = v248[1];
        v249 = true;
        
        break;
        }
      case 'Some': {
        const v251 = v248[1];
        v249 = false;
        
        break;
        }
      }
    const v252 = v247 ? v249 : false;
    
    const txn3 = await (ctc.sendrecv({
      args: [v209, v211, v225, v233, v240, v242, v237],
      evt_cnt: 3,
      funcNum: 6,
      lct: v226,
      onlyIf: v252,
      out_tys: [ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:75:12:dot', stdlib.UInt_max, 0), [[v240, v211]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v254, v255, v256], secs: v258, time: v257, didSend: v80, from: v253 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:75:12:dot', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v261 = stdlib.add(v233, v254);
        sim_r.txns.push({
          amt: v254,
          kind: 'to',
          tok: v211
          });
        const v262 = stdlib.ge(v225, v254);
        stdlib.assert(v262, {
          at: './index.rsh:80:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v263 = stdlib.gt(v255, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, 1000));
        stdlib.assert(v263, {
          at: './index.rsh:81:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v264 = stdlib.gt(v254, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v264, {
          at: './index.rsh:82:12:application',
          fs: [],
          msg: 'Amount must be greater than zero',
          who: 'Lender'
          });
        const v265 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v256), null);
        let v266;
        switch (v265[0]) {
          case 'None': {
            const v267 = v265[1];
            const v269 = {
              amount: stdlib.checkedBigNumberify('./index.rsh:86:16:decimal', stdlib.UInt_max, 0),
              createdAt: stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, 0)
              };
            v266 = v269;
            
            break;
            }
          case 'Some': {
            const v270 = v265[1];
            v266 = v270;
            
            break;
            }
          }
        const v271 = v266.createdAt;
        const v272 = stdlib.eq(v271, stdlib.checkedBigNumberify('./index.rsh:89:34:decimal', stdlib.UInt_max, 0));
        if (v272) {
          const v273 = {
            amount: v254,
            createdAt: v255
            };
          await stdlib.simMapSet(sim_r, 0, v256, v273);
          const v274 = stdlib.sub(v225, v254);
          const cv225 = v274;
          const cv226 = v257;
          const cv233 = v261;
          
          await (async () => {
            const v225 = cv225;
            const v226 = cv226;
            const v233 = cv233;
            
            if (await (async () => {
              const v236 = stdlib.gt(v225, stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, 0));
              
              return v236;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        else {
          const v275 = v266.amount;
          const v276 = stdlib.add(v275, v254);
          const v277 = {
            amount: v276,
            createdAt: v255
            };
          await stdlib.simMapSet(sim_r, 0, v256, v277);
          const v278 = stdlib.sub(v225, v254);
          const cv225 = v278;
          const cv226 = v257;
          const cv233 = v261;
          
          await (async () => {
            const v225 = cv225;
            const v226 = cv226;
            const v233 = cv233;
            
            if (await (async () => {
              const v236 = stdlib.gt(v225, stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, 0));
              
              return v236;})()) {
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
    const {data: [v254, v255, v256], secs: v258, time: v257, didSend: v80, from: v253 } = txn3;
    ;
    const v261 = stdlib.add(v233, v254);
    ;
    const v262 = stdlib.ge(v225, v254);
    stdlib.assert(v262, {
      at: './index.rsh:80:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v263 = stdlib.gt(v255, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v263, {
      at: './index.rsh:81:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v264 = stdlib.gt(v254, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v264, {
      at: './index.rsh:82:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Lender'
      });
    const v265 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v256), null);
    let v266;
    switch (v265[0]) {
      case 'None': {
        const v267 = v265[1];
        const v269 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:86:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, 0)
          };
        v266 = v269;
        
        break;
        }
      case 'Some': {
        const v270 = v265[1];
        v266 = v270;
        
        break;
        }
      }
    const v271 = v266.createdAt;
    const v272 = stdlib.eq(v271, stdlib.checkedBigNumberify('./index.rsh:89:34:decimal', stdlib.UInt_max, 0));
    if (v272) {
      const v273 = {
        amount: v254,
        createdAt: v255
        };
      await stdlib.mapSet(map0, v256, v273);
      const v274 = stdlib.sub(v225, v254);
      const cv225 = v274;
      const cv226 = v257;
      const cv233 = v261;
      
      v225 = cv225;
      v226 = cv226;
      v233 = cv233;
      
      continue;}
    else {
      const v275 = v266.amount;
      const v276 = stdlib.add(v275, v254);
      const v277 = {
        amount: v276,
        createdAt: v255
        };
      await stdlib.mapSet(map0, v256, v277);
      const v278 = stdlib.sub(v225, v254);
      const cv225 = v278;
      const cv226 = v257;
      const cv233 = v261;
      
      v225 = cv225;
      v226 = cv226;
      v233 = cv233;
      
      continue;}
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v209, v211, v233],
    evt_cnt: 0,
    funcNum: 3,
    lct: v226,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v283, time: v282, didSend: v108, from: v281 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:111:10:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v286 = v233;
      const v287 = v282;
      const v294 = v233;
      
      if (await (async () => {
        const v297 = stdlib.gt(v286, stdlib.checkedBigNumberify('./index.rsh:115:23:decimal', stdlib.UInt_max, 0));
        
        return v297;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v353 = stdlib.sub(v294, v294);
        sim_r.txns.push({
          amt: v294,
          kind: 'from',
          to: v209,
          tok: v211
          });
        const v355 = stdlib.eq(v353, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v355, {
          at: './index.rsh:167:10:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v211
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
  const {data: [], secs: v283, time: v282, didSend: v108, from: v281 } = txn3;
  ;
  let v286 = v233;
  let v287 = v282;
  let v294 = v233;
  
  while (await (async () => {
    const v297 = stdlib.gt(v286, stdlib.checkedBigNumberify('./index.rsh:115:23:decimal', stdlib.UInt_max, 0));
    
    return v297;})()) {
    const v298 = ctc.selfAddress();
    const v300 = stdlib.protect(ctc1, await interact.getDate(), {
      at: './index.rsh:120:52:application',
      fs: ['at ./index.rsh:118:16:application call to [unknown function] (defined at: ./index.rsh:118:20:function exp)'],
      msg: 'getDate',
      who: 'Lender'
      });
    const v301 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v298), null);
    let v302;
    switch (v301[0]) {
      case 'None': {
        const v303 = v301[1];
        const v305 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:125:34:decimal', stdlib.UInt_max, 0)
          };
        v302 = v305;
        
        break;
        }
      case 'Some': {
        const v306 = v301[1];
        v302 = v306;
        
        break;
        }
      }
    const v307 = v302.amount;
    const v308 = v302.createdAt;
    const v309 = stdlib.ge(v300, v308);
    stdlib.assert(v309, {
      at: './index.rsh:131:13:application',
      fs: ['at ./index.rsh:118:16:application call to [unknown function] (defined at: ./index.rsh:118:20:function exp)'],
      msg: null,
      who: 'Lender'
      });
    const v311 = stdlib.ge(v294, v307);
    stdlib.assert(v311, {
      at: './index.rsh:132:13:application',
      fs: ['at ./index.rsh:118:16:application call to [unknown function] (defined at: ./index.rsh:118:20:function exp)'],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Lender'
      });
    const v312 = stdlib.sub(v300, v308);
    const v313 = v210.lendingAPY;
    const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:136:66:decimal', stdlib.UInt_max, 365));
    const v315 = stdlib.mul(v314, v312);
    const v316 = stdlib.div(v315, stdlib.checkedBigNumberify('./index.rsh:137:41:decimal', stdlib.UInt_max, 100));
    const v317 = stdlib.mul(v316, v307);
    const v318 = stdlib.add(v317, v307);
    stdlib.protect(ctc0, await interact.withdraw(v318), {
      at: './index.rsh:140:24:application',
      fs: ['at ./index.rsh:118:16:application call to [unknown function] (defined at: ./index.rsh:118:20:function exp)'],
      msg: 'withdraw',
      who: 'Lender'
      });
    
    const v319 = stdlib.addressEq(v298, v298);
    const v320 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v298), null);
    let v321;
    switch (v320[0]) {
      case 'None': {
        const v322 = v320[1];
        v321 = false;
        
        break;
        }
      case 'Some': {
        const v323 = v320[1];
        v321 = true;
        
        break;
        }
      }
    const v324 = v319 ? v321 : false;
    const v325 = stdlib.ge(v286, v307);
    const v326 = v324 ? v325 : false;
    
    const txn4 = await (ctc.sendrecv({
      args: [v209, v211, v286, v294, v300, v308, v307, v312, v317, v318, v298],
      evt_cnt: 7,
      funcNum: 5,
      lct: v287,
      onlyIf: v326,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:143:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v328, v329, v330, v331, v332, v333, v334], secs: v336, time: v335, didSend: v164, from: v327 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:143:12:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v338 = stdlib.ge(v328, v329);
        stdlib.assert(v338, {
          at: './index.rsh:152:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v340 = stdlib.ge(v294, v330);
        stdlib.assert(v340, {
          at: './index.rsh:153:12:application',
          fs: [],
          msg: 'Currently not enough money to pay you, try again later.',
          who: 'Lender'
          });
        const v341 = stdlib.ge(v333, v330);
        stdlib.assert(v341, {
          at: './index.rsh:154:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        const v343 = stdlib.ge(v294, v333);
        stdlib.assert(v343, {
          at: './index.rsh:155:12:application',
          fs: [],
          msg: null,
          who: 'Lender'
          });
        await stdlib.simMapSet(sim_r, 0, v327, undefined);
        const v347 = stdlib.sub(v294, v333);
        sim_r.txns.push({
          amt: v333,
          kind: 'from',
          to: v334,
          tok: v211
          });
        const v348 = stdlib.sub(v286, v333);
        const cv286 = v348;
        const cv287 = v335;
        const cv294 = v347;
        
        await (async () => {
          const v286 = cv286;
          const v287 = cv287;
          const v294 = cv294;
          
          if (await (async () => {
            const v297 = stdlib.gt(v286, stdlib.checkedBigNumberify('./index.rsh:115:23:decimal', stdlib.UInt_max, 0));
            
            return v297;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v353 = stdlib.sub(v294, v294);
            sim_r.txns.push({
              amt: v294,
              kind: 'from',
              to: v209,
              tok: v211
              });
            const v355 = stdlib.eq(v353, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v355, {
              at: './index.rsh:167:10:application',
              fs: [],
              msg: null,
              who: 'Lender'
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v211
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
    const {data: [v328, v329, v330, v331, v332, v333, v334], secs: v336, time: v335, didSend: v164, from: v327 } = txn4;
    ;
    const v338 = stdlib.ge(v328, v329);
    stdlib.assert(v338, {
      at: './index.rsh:152:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v340 = stdlib.ge(v294, v330);
    stdlib.assert(v340, {
      at: './index.rsh:153:12:application',
      fs: [],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Lender'
      });
    const v341 = stdlib.ge(v333, v330);
    stdlib.assert(v341, {
      at: './index.rsh:154:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    const v343 = stdlib.ge(v294, v333);
    stdlib.assert(v343, {
      at: './index.rsh:155:12:application',
      fs: [],
      msg: null,
      who: 'Lender'
      });
    await stdlib.mapSet(map0, v327, undefined);
    const v347 = stdlib.sub(v294, v333);
    ;
    const v348 = stdlib.sub(v286, v333);
    const cv286 = v348;
    const cv287 = v335;
    const cv294 = v347;
    
    v286 = cv286;
    v287 = cv287;
    v294 = cv294;
    
    continue;
    
    }
  const v353 = stdlib.sub(v294, v294);
  ;
  const v355 = stdlib.eq(v353, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v355, {
    at: './index.rsh:167:10:application',
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
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v205 = stdlib.protect(ctc4, interact.acceptToken, 'for Owner\'s interact field acceptToken');
  
  const v208 = {
    borrowingAPY: stdlib.checkedBigNumberify('./index.rsh:34:21:decimal', stdlib.UInt_max, 7),
    id: v205,
    lendingAPY: stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, 5)
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v208, v205],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v210, v211], secs: v213, time: v212, didSend: v30, from: v209 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v211
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:38:9:decimal', stdlib.UInt_max, 0),
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
  const {data: [v210, v211], secs: v213, time: v212, didSend: v30, from: v209 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.viewLendingToken(v210), {
    at: './index.rsh:49:30:application',
    fs: ['at ./index.rsh:48:7:application call to [unknown function] (defined at: ./index.rsh:48:28:function exp)'],
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
  const {data: [], secs: v223, time: v222, didSend: v44, from: v221 } = txn2;
  ;
  let v225 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, 3000);
  let v226 = v222;
  let v233 = stdlib.checkedBigNumberify('./index.rsh:38:9:dot', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v236 = stdlib.gt(v225, stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, 0));
    
    return v236;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 6,
      out_tys: [ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v254, v255, v256], secs: v258, time: v257, didSend: v80, from: v253 } = txn3;
    ;
    const v261 = stdlib.add(v233, v254);
    ;
    const v262 = stdlib.ge(v225, v254);
    stdlib.assert(v262, {
      at: './index.rsh:80:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v263 = stdlib.gt(v255, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, 1000));
    stdlib.assert(v263, {
      at: './index.rsh:81:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v264 = stdlib.gt(v254, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v264, {
      at: './index.rsh:82:12:application',
      fs: [],
      msg: 'Amount must be greater than zero',
      who: 'Owner'
      });
    const v265 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v256), null);
    let v266;
    switch (v265[0]) {
      case 'None': {
        const v267 = v265[1];
        const v269 = {
          amount: stdlib.checkedBigNumberify('./index.rsh:86:16:decimal', stdlib.UInt_max, 0),
          createdAt: stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, 0)
          };
        v266 = v269;
        
        break;
        }
      case 'Some': {
        const v270 = v265[1];
        v266 = v270;
        
        break;
        }
      }
    const v271 = v266.createdAt;
    const v272 = stdlib.eq(v271, stdlib.checkedBigNumberify('./index.rsh:89:34:decimal', stdlib.UInt_max, 0));
    if (v272) {
      const v273 = {
        amount: v254,
        createdAt: v255
        };
      await stdlib.mapSet(map0, v256, v273);
      const v274 = stdlib.sub(v225, v254);
      const cv225 = v274;
      const cv226 = v257;
      const cv233 = v261;
      
      v225 = cv225;
      v226 = cv226;
      v233 = cv233;
      
      continue;}
    else {
      const v275 = v266.amount;
      const v276 = stdlib.add(v275, v254);
      const v277 = {
        amount: v276,
        createdAt: v255
        };
      await stdlib.mapSet(map0, v256, v277);
      const v278 = stdlib.sub(v225, v254);
      const cv225 = v278;
      const cv226 = v257;
      const cv233 = v261;
      
      v225 = cv225;
      v226 = cv226;
      v233 = cv233;
      
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
  const {data: [], secs: v283, time: v282, didSend: v108, from: v281 } = txn3;
  ;
  let v286 = v233;
  let v287 = v282;
  let v294 = v233;
  
  while (await (async () => {
    const v297 = stdlib.gt(v286, stdlib.checkedBigNumberify('./index.rsh:115:23:decimal', stdlib.UInt_max, 0));
    
    return v297;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 7,
      funcNum: 5,
      out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v328, v329, v330, v331, v332, v333, v334], secs: v336, time: v335, didSend: v164, from: v327 } = txn4;
    ;
    const v338 = stdlib.ge(v328, v329);
    stdlib.assert(v338, {
      at: './index.rsh:152:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v340 = stdlib.ge(v294, v330);
    stdlib.assert(v340, {
      at: './index.rsh:153:12:application',
      fs: [],
      msg: 'Currently not enough money to pay you, try again later.',
      who: 'Owner'
      });
    const v341 = stdlib.ge(v333, v330);
    stdlib.assert(v341, {
      at: './index.rsh:154:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v343 = stdlib.ge(v294, v333);
    stdlib.assert(v343, {
      at: './index.rsh:155:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    await stdlib.mapSet(map0, v327, undefined);
    const v347 = stdlib.sub(v294, v333);
    ;
    const v348 = stdlib.sub(v286, v333);
    const cv286 = v348;
    const cv287 = v335;
    const cv294 = v347;
    
    v286 = cv286;
    v287 = cv287;
    v294 = cv294;
    
    continue;
    
    }
  const v353 = stdlib.sub(v294, v294);
  ;
  const v355 = stdlib.eq(v353, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v355, {
    at: './index.rsh:167:10:application',
    fs: [],
    msg: null,
    who: 'Owner'
    });
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `BSAQAAEgCAQDKBAGMBEYoI0GBQfoByYCAAEBMSAyAxJEMQYyAxJEIjUAMRhBBUcoZEkiWzUBJVs1AjEZIxJBABQxACEKr0sBI69LAlcAEWZISEIFCjEbIQUSRDYaABdJIhJBAN9IIjQBEkQ2GgEXSSISTDQCEhFEKEg2GgJJFSQSRElXABg1/0khC1s1/kiABDU1ZTE0/1A0/hZQsCEMSUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRIIQxJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREgisbISIQSyEDIKshQ0/rIRsyJIMQA0/hZQI69LAVcAKGdIIzUBMgY1AjEZIhJEQgQSSSMSQQBMSCM0ARJENhoBF0kiEkw0AhIRRCOvZElXACA1/0kkWzX+SDYaAkkVIhJESIAEOWE4YrA0/zT+FlCACAAAAAAAAAu4MgYWUCWvUEICuUkhBRJBAE1IIQU0ARJENhoBF0kiEkw0AhIRRCOvZElXACA1/0kkWzX+SSEGWzX9SDYaAkkVIhJESIAEYTc2NbA0/zT+FlA0/RYyBhZQNP0WUEIC00khDRJBAOxIIQg0ARJENhoBF0kiEkw0AhIRRCOvZElXACA1/0kkWzX+SSEGWzX9SSEJWzX8SDYaAkkVgVASREkiWzX7SSVbNfpJIQdbNflJIQtbNfhJJFs190khBls19klXMCA19UiABDE5YzM0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlA09VCwNPs0+g9ENPw0+Q9ENPY0+Q9ENPw09g9EMQBJSSOvYkxIIQqvNfRJSDT0TEhLASOvSwJXABFmSEg09klBABGxshIhBLIQNPWyFDT+shGzIkg0/zT+FlA0/TT2CRYyBhZQNPw09gkWUEIB4EkhCBJBAWlIIQ40ARJENhoBF0kiEkw0AhIRRCOvZElXACA1/0kkWzX+SSEGWzX9SSEJWzX8SDYaAkkVIQkSREkiWzX7SSVbNfpJVxAgNflIgAQ2MjUzNPsWUDT6FlA0+VCwNPw0+wg1+DT7SUEAPTQASSMINQBMSwE4EhJENP5LATgREkQhBEsBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgUEkRINP00+w9ENPohDw1ENPsiDUQ0+Ukjr2JMSEk19yJVIhJBAAUhB6819jT3IlUjEkEACjT3VwEQSTX1NfY09iVbIhJBAD00+UlJI69iTEgpNPsWNPoWUFA19UlINPVMSEsBI69LAlcAEWZISDT/NP4WUDT9NPsJFjIGFlA0+BZQQgBENPlJSSOvYkxIKTT2Ils0+wgWNPoWUFA19UlINPVMSEsBI69LAlcAEWZISDT/NP4WUDT9NPsJFjIGFlA0+BZQQgACIkRJIls1/0klWzX+SSEHWzX9SElXACA1/EkkWzX7SDT/Ig1BACc0/DT7FlA0/xZQNP0WUCOvSwFXADhnSCEONQEyBjUCMRkiEkRCALw0/DT7FlA0/RZQI69LAVcAMGdIIQU1ATIGNQIxGSISREIAmUkiWzX/SSVbNf5JIQdbNf1ISVcAIDX8SSRbNftINP8iDUEAJzT8NPsWUDT/FlA0/RZQI69LAVcAOGdIIQg1ATIGNQIxGSISREIATjT9SUEAEbGyEiEEshA0/LIUNPuyEbMiSDT9SQkiEkQisbISIQSyEDIJshUyCrIUNPuyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZIQ0SRCg0ARY0AhZQZzQASUkjCDIEEkQxFhJEIQ8LMQEORCNDMRkiEkQiNQEiNQJC/9I=`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 17,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 8
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
                "name": "v210",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v211",
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
                "name": "v210",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v211",
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
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v334",
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
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v256",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_createdAt",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
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
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v334",
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
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v256",
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
  Bytecode: `0x6080604052604051620019e1380380620019e1833981016040819052620000269162000241565b600080554360035560408051825181526020808401518051805183850152808301516001600160a01b03908116858701529401516060840152015190911660808201527f9e88205450cb9c83892e9680e88f40c3693181177716e80525aa82995b1b9fab9060a00160405180910390a1620000a4341560076200011d565b6040805180820182526000602080830182815233808552868301518301516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200011492919062000147565b50505062000350565b81620001435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001559062000313565b90600052602060002090601f016020900481019282620001795760008555620001c4565b82601f106200019457805160ff1916838001178555620001c4565b82800160010185558215620001c4579182015b82811115620001c4578251825591602001919060010190620001a7565b50620001d2929150620001d6565b5090565b5b80821115620001d25760008155600101620001d7565b604080519081016001600160401b03811182821017156200021e57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023c57600080fd5b919050565b600081830360a08112156200025557600080fd5b6200025f620001ed565b83518152601f198201915060808212156200027957600080fd5b62000283620001ed565b60608312156200029257600080fd5b6040519250606083016001600160401b0381118482101715620002c557634e487b7160e01b600052604160045260246000fd5b806040525060208501518352620002df6040860162000224565b602084015260608501516040840152828152620002ff6080860162000224565b602082810191909152820152949350505050565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b61168180620003606000396000f3fe6080604052600436106100795760003560e01c806373b4522c1161004b57806373b4522c146100f9578063832307571461010c578063ab53f2c614610121578063bdd871511461014457005b80631e93b0f11461008257806329dc9c15146100a65780632c10a159146100b95780633bc5b7bf146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b43660046111b4565b610157565b6100806100c73660046111cc565b610520565b3480156100d857600080fd5b506100ec6100e73660046111f3565b610681565b60405161009d9190611226565b6100806101073660046111cc565b610698565b34801561011857600080fd5b50600154610093565b34801561012d57600080fd5b506101366107fb565b60405161009d9291906112a4565b6100806101523660046112de565b610898565b610167600760005414601b610ac3565b6101818135158061017a57506001548235145b601c610ac3565b600080805560028054610193906112f1565b80601f01602080910402602001604051908101604052809291908181526020018280546101bf906112f1565b801561020c5780601f106101e15761010080835404028352916020019161020c565b820191906000526020600020905b8154815290600101906020018083116101ef57829003601f168201915b505050505080602001905181019061022491906113ae565b905061022e610f9d565b7f7c3c15cc857b172dd341dc7c535528218753423c64db3084bb7a4712dd150ae48360405161025d91906113ca565b60405180910390a161027134156016610ac3565b606082015161028590602085013590611422565b81526020808301516102a69161029f913391870135610aed565b6017610ac3565b6102bf8360200160000135836040015110156018610ac3565b6102d26103e86040850135116019610ac3565b6102e360208401351515601a610ac3565b6102fb6102f660808501606086016111f3565b610b05565b6020820181905251600090600181111561031757610317611210565b141561033a57606081018051600090819052815160200152516040820152610370565b6001602082015151600181111561035357610353611210565b141561037057602081015160409081015160808301819052908201525b60408101516020015161048a5760a081018051602080860135909152905160408501359101526001600460006103ac60808701606088016111f3565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156103de576103de611210565b021790555060a0810151600460006103fc60808701606088016111f3565b6001600160a01b031681526020808201929092526040016000208251600182015591015160029091015561042e611066565b825181516001600160a01b03918216905260208085015183519216918101919091526040840151610462918601359061143a565b6020808301805192909252815143910152825190516040015261048481610bda565b50505050565b60408101515161049f90602085013590611422565b60c082018051919091525160408401356020909101526001600460006104cb60808701606088016111f3565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156104fd576104fd611210565b021790555060c0810151600460006103fc60808701606088016111f3565b505050565b6105306001600054146009610ac3565b61054a8135158061054357506001548235145b600a610ac3565b60008080556002805461055c906112f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610588906112f1565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050508060200190518101906105ed9190611451565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161061e91906114cc565b60405180910390a161063234156008610ac3565b61063a611066565b815181516001600160a01b03918216905260208084015183519216918101919091528082018051610bb8905280514392019190915251600060409091015261051b81610bda565b6106896110ac565b61069282610b05565b92915050565b6106a8600360005414600c610ac3565b6106c2813515806106bb57506001548235145b600d610ac3565b6000808055600280546106d4906112f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610700906112f1565b801561074d5780601f106107225761010080835404028352916020019161074d565b820191906000526020600020905b81548152906001019060200180831161073057829003601f168201915b505050505080602001905181019061076591906114f1565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c098260405161079691906114cc565b60405180910390a16107aa3415600b610ac3565b6107b2611066565b815181516001600160a01b039182169052602080840151835192169181019190915260408084018051838501805191909152805143940193909352519151015261051b81610cde565b600060606000546002808054610810906112f1565b80601f016020809104026020016040519081016040528092919081815260200182805461083c906112f1565b80156108895780601f1061085e57610100808354040283529160200191610889565b820191906000526020600020905b81548152906001019060200180831161086c57829003601f168201915b50505050509050915091509091565b6108a86006600054146014610ac3565b6108c2813515806108bb57506001548235145b6015610ac3565b6000808055600280546108d4906112f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610900906112f1565b801561094d5780601f106109225761010080835404028352916020019161094d565b820191906000526020600020905b81548152906001019060200180831161093057829003601f168201915b505050505080602001905181019061096591906113ae565b90507f6597b3f155c769cf20a050c1a223fd7424ba125b920fb9fc151c460e6b2e669682604051610996919061156a565b60405180910390a16109aa3415600f610ac3565b6109c06040830135602084013510156010610ac3565b6109d98260200160400135826060015110156011610ac3565b6109ef606083013560c084013510156012610ac3565b610a088260200160a00135826060015110156013610ac3565b3360009081526004602090815260408220805461ffff191681556001810183905560020191909155810151610a5290610a48610100850160e086016111f3565b60c0850135610da3565b610a5a611066565b815181516001600160a01b039182169052602080840151835192169101526040820151610a8c9060c08501359061143a565b60208083018051929092529051439101526060820151610ab19060c08501359061143a565b60208201516040015261051b81610cde565b81610ae95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000610afb83853085610db7565b90505b9392505050565b610b0d6110ac565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610b3c57610b3c611210565b1415610bca576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b7d57610b7d611210565b6001811115610b8e57610b8e611210565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b6000815260016020820152919050565b60208101515115610c6e576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260079091554360015591519091610c4a918391016115d9565b6040516020818303038152906040526002908051906020019061051b9291906110e5565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015182168452898501518901518352600390955543600155875193840194909452905190921694810194909452519083015290608001610c4a565b50565b60208101515115610d4e576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286830180515190915251850151905260069091554360015591519091610c4a918391016115d9565b805160208082015191519083015160400151610d6b929190610da3565b602081015160400151610d8d90600090610d85908061143a565b14600e610ac3565b60008080556001819055610cdb90600290611169565b610dae838383610e91565b61051b57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610e1e91611612565b60006040518083038185875af1925050503d8060008114610e5b576040519150601f19603f3d011682016040523d82523d6000602084013e610e60565b606091505b5091509150610e7182826001610f62565b5080806020019051810190610e86919061162e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610ef091611612565b60006040518083038185875af1925050503d8060008114610f2d576040519150601f19603f3d011682016040523d82523d6000602084013e610f32565b606091505b5091509150610f4382826002610f62565b5080806020019051810190610f58919061162e565b9695505050505050565b60608315610f71575081610afe565b825115610f815782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ae0565b6040518060e0016040528060008152602001610fb76110ac565b8152602001610fd9604051806040016040528060008152602001600081525090565b8152602001610ffb604051806040016040528060008152602001600081525090565b815260200161101d604051806040016040528060008152602001600081525090565b815260200161103f604051806040016040528060008152602001600081525090565b8152602001611061604051806040016040528060008152602001600081525090565b905290565b6040805160808101825260009181018281526060820192909252908190815260200161106160405180606001604052806000815260200160008152602001600081525090565b60408051606081019091528060008152602001600015158152602001611061604051806040016040528060008152602001600081525090565b8280546110f1906112f1565b90600052602060002090601f0160209004810192826111135760008555611159565b82601f1061112c57805160ff1916838001178555611159565b82800160010185558215611159579182015b8281111561115957825182559160200191906001019061113e565b5061116592915061119f565b5090565b508054611175906112f1565b6000825580601f10611185575050565b601f016020900490600052602060002090810190610cdb91905b5b8082111561116557600081556001016111a0565b6000608082840312156111c657600080fd5b50919050565b6000604082840312156111c657600080fd5b6001600160a01b0381168114610cdb57600080fd5b60006020828403121561120557600080fd5b8135610afe816111de565b634e487b7160e01b600052602160045260246000fd5b815160808201906002811061124b57634e487b7160e01b600052602160045260246000fd5b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b60005b8381101561129357818101518382015260200161127b565b838111156104845750506000910152565b82815260406020820152600082518060408401526112c9816060850160208701611278565b601f01601f1916919091016060019392505050565b600061010082840312156111c657600080fd5b600181811c9082168061130557607f821691505b602082108114156111c657634e487b7160e01b600052602260045260246000fd5b60006080828403121561133857600080fd5b6040516080810181811067ffffffffffffffff8211171561136957634e487b7160e01b600052604160045260246000fd5b8060405250809150825161137c816111de565b8152602083015161138c816111de565b8060208301525060408301516040820152606083015160608201525092915050565b6000608082840312156113c057600080fd5b610afe8383611326565b8135815260208083013590820152604080830135908201526080810160608301356113f4816111de565b6001600160a01b031660609290920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114355761143561140c565b500190565b60008282101561144c5761144c61140c565b500390565b60006040828403121561146357600080fd5b6040516040810181811067ffffffffffffffff8211171561149457634e487b7160e01b600052604160045260246000fd5b60405282516114a2816111de565b815260208301516114b2816111de565b60208201529392505050565b8015158114610cdb57600080fd5b813581526040810160208301356114e2816114be565b80151560208401525092915050565b60006060828403121561150357600080fd5b6040516060810181811067ffffffffffffffff8211171561153457634e487b7160e01b600052604160045260246000fd5b6040528251611542816111de565b81526020830151611552816111de565b60208201526040928301519281019290925250919050565b600061010082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e08301356115c1816111de565b6001600160a01b031660e09290920191909152919050565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808101610692565b60008251611624818460208701611278565b9190910192915050565b60006020828403121561164057600080fd5b8151610afe816114be56fea26469706673582212201557282cda79b2ca287eefc1345997887acdde07dc4927bd8e54fc7d1d2a210164736f6c63430008090033`,
  BytecodeLen: 6625,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Lender": Lender,
  "Owner": Owner
  };
export const _APIs = {
  };
