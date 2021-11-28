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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc1],
      3: [ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Lender(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lender expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lender expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    amount: ctc1,
    token: ctc1
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v24, from: v64 } = txn1;
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
  const {data: [], secs: v71, time: v70, didSend: v31, from: v69 } = txn2;
  ;
  ;
  const v74 = stdlib.addressEq(v64, v69);
  stdlib.assert(v74, {
    at: './index.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lender'
    });
  const v79 = stdlib.protect(ctc2, await interact.lend(), {
    at: './index.rsh:42:53:application',
    fs: ['at ./index.rsh:41:14:application call to [unknown function] (defined at: ./index.rsh:41:18:function exp)'],
    msg: 'lend',
    who: 'Lender'
    });
  const v80 = v79.token;
  const v81 = v79.amount;
  const v82 = stdlib.gt(v81, stdlib.checkedBigNumberify('./index.rsh:43:21:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v82, {
    at: './index.rsh:43:11:application',
    fs: ['at ./index.rsh:41:14:application call to [unknown function] (defined at: ./index.rsh:41:18:function exp)'],
    msg: 'Amount must be greater than zero',
    who: 'Lender'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v65, v80, v81],
    evt_cnt: 2,
    funcNum: 2,
    lct: v70,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v84, v85], secs: v87, time: v86, didSend: v48, from: v83 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v89 = stdlib.gt(v85, stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v89, {
        at: './index.rsh:61:10:application',
        fs: [],
        msg: 'Amount must be greater than zero',
        who: 'Lender'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v84, v85], secs: v87, time: v86, didSend: v48, from: v83 } = txn3;
  ;
  const v89 = stdlib.gt(v85, stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v89, {
    at: './index.rsh:61:10:application',
    fs: [],
    msg: 'Amount must be greater than zero',
    who: 'Lender'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v54, from: v90 } = txn4;
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  
  const v63 = stdlib.protect(ctc0, await interact.acceptToken(), {
    at: './index.rsh:29:65:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: 'acceptToken',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v63],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v65], secs: v67, time: v66, didSend: v24, from: v64 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v65
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
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v24, from: v64 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v64, v65],
    evt_cnt: 0,
    funcNum: 1,
    lct: v66,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:34:15:decimal', stdlib.UInt_max, 0), v65]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v71, time: v70, didSend: v31, from: v69 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:34:15:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: v65
        });
      const v74 = stdlib.addressEq(v64, v69);
      stdlib.assert(v74, {
        at: './index.rsh:34:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v71, time: v70, didSend: v31, from: v69 } = txn2;
  ;
  ;
  const v74 = stdlib.addressEq(v64, v69);
  stdlib.assert(v74, {
    at: './index.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  stdlib.protect(ctc1, await interact.viewLendingToken(v65), {
    at: './index.rsh:38:30:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'viewLendingToken',
    who: 'Owner'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc2, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v84, v85], secs: v87, time: v86, didSend: v48, from: v83 } = txn3;
  ;
  const v89 = stdlib.gt(v85, stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v89, {
    at: './index.rsh:61:10:application',
    fs: [],
    msg: 'Amount must be greater than zero',
    who: 'Owner'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v54, from: v90 } = txn4;
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function borrower(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for borrower expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for borrower expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v24, from: v64 } = txn1;
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
  const {data: [], secs: v71, time: v70, didSend: v31, from: v69 } = txn2;
  ;
  ;
  const v74 = stdlib.addressEq(v64, v69);
  stdlib.assert(v74, {
    at: './index.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'borrower'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v84, v85], secs: v87, time: v86, didSend: v48, from: v83 } = txn3;
  ;
  const v89 = stdlib.gt(v85, stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v89, {
    at: './index.rsh:61:10:application',
    fs: [],
    msg: 'Amount must be greater than zero',
    who: 'borrower'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v65],
    evt_cnt: 0,
    funcNum: 3,
    lct: v86,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v92, time: v91, didSend: v54, from: v90 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v65
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v54, from: v90 } = txn4;
  ;
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
int 8
==
assert
dup
btoi
store 255
pop
// "CheckPay"
// "./index.rsh:31:9:dot"
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
load 255
itxn_field XferAsset
itxn_submit
int 0
l3_makeTxnK:
pop
// "CheckPay"
// "./index.rsh:31:9:dot"
// "[]"
txn Sender
load 255
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
// "./index.rsh:34:9:dot"
// "[]"
// "CheckPay"
// "./index.rsh:34:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:34:9:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
itob
int 1
bzero
dig 1
extract 0 8
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 2
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
btoi
store 255
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 254
dup
int 8
extract_uint64
store 253
pop
// "CheckPay"
// "./index.rsh:46:10:dot"
// "[]"
// Just "Amount must be greater than zero"
// "./index.rsh:61:10:application"
// "[]"
load 253
int 0
>
assert
load 255
itob
int 1
bzero
dig 1
extract 0 8
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
btoi
store 255
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:85:12:dot"
// "[]"
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 255
itxn_field XferAsset
itxn_submit
int 0
l7_makeTxnK:
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
l8_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l6_afterHandler3:
int 0
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
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "internalType": "address payable",
                "name": "v65",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v65",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T4",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T4",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d0c38038062000d0c8339810160408190526200002691620001ca565b60008055436003556040805182518152602080840151516001600160a01b0316908201527f2b1e11c3fcb62877393e6d0088a7ce02f1ef2620bf37c6b6fa4e139b1ef2d51e910160405180910390a16200008334156007620000fa565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f192919062000124565b505050620002c5565b81620001205760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001329062000288565b90600052602060002090601f016020900481019282620001565760008555620001a1565b82601f106200017157805160ff1916838001178555620001a1565b82800160010185558215620001a1579182015b82811115620001a157825182559160200191906001019062000184565b50620001af929150620001b3565b5090565b5b80821115620001af5760008155600101620001b4565b6000818303604080821215620001df57600080fd5b80518082016001600160401b0380821183831017156200020f57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200022957600080fd5b8351945060208501915084821081831117156200025657634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027657600080fd5b90825260208101919091529392505050565b600181811c908216806200029d57607f821691505b60208210811415620002bf57634e487b7160e01b600052602260045260246000fd5b50919050565b610a3780620002d56000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c1461009657806383230757146100a95780639014596a146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046107f3565b6100f4565b61005d6100a43660046107f3565b610295565b3480156100b557600080fd5b50600154610070565b61005d6100cc36600461080b565b6103c1565b3480156100dd57600080fd5b506100e661052d565b60405161007a929190610849565b610104600160005414600b6105ca565b61011e8135158061011757506001548235145b600c6105ca565b60008080556002805461013090610883565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610883565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906108d4565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101f2919061094b565b60405180910390a1610206341560086105ca565b61022061021933836020015160006105f0565b60096105ca565b8051610238906001600160a01b03163314600a6105ca565b60408051602080820183526000808352848201516001600160a01b03168084526002909155436001558351918201529091015b6040516020818303038152906040526002908051906020019061028f92919061071d565b50505050565b6102a560036000541460126105ca565b6102bf813515806102b857506001548235145b60136105ca565b6000808055600280546102d190610883565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90610883565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b50505050508060200190518101906103629190610970565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c0982604051610393919061094b565b60405180910390a16103a7341560116105ca565b600080805560018190556103bd906002906107a1565b5050565b6103d1600260005414600f6105ca565b6103eb813515806103e457506001548235145b60106105ca565b6000808055600280546103fd90610883565b80601f016020809104026020016040519081016040528092919081815260200182805461042990610883565b80156104765780601f1061044b57610100808354040283529160200191610476565b820191906000526020600020905b81548152906001019060200180831161045957829003601f168201915b505050505080602001905181019061048e9190610970565b604080518435815260208086013590820152848201358183015290519192507f1909e55c00533c67ba90e14c8fe93a469c3600425ed0758459eff538687e7b91919081900360600190a16104e43415600d6105ca565b6104f560408301351515600e6105ca565b60408051602081019091526000815281516001600160a01b03168082526003600055436001556040805160208101929092520161026b565b60006060600054600280805461054290610883565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90610883565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b50505050509050915091509091565b816103bd5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006105fe83853085610608565b90505b9392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161066f916109c8565b60006040518083038185875af1925050503d80600081146106ac576040519150601f19603f3d011682016040523d82523d6000602084013e6106b1565b606091505b50915091506106c2828260016106e2565b50808060200190518101906106d791906109e4565b979650505050505050565b606083156106f1575081610601565b8251156107015782518084602001fd5b60405163100960cb60e01b8152600481018390526024016105e7565b82805461072990610883565b90600052602060002090601f01602090048101928261074b5760008555610791565b82601f1061076457805160ff1916838001178555610791565b82800160010185558215610791579182015b82811115610791578251825591602001919060010190610776565b5061079d9291506107de565b5090565b5080546107ad90610883565b6000825580601f106107bd575050565b601f0160209004906000526020600020908101906107db91906107de565b50565b5b8082111561079d57600081556001016107df565b60006040828403121561080557600080fd5b50919050565b60006060828403121561080557600080fd5b60005b83811015610838578181015183820152602001610820565b8381111561028f5750506000910152565b828152604060208201526000825180604084015261086e81606085016020870161081d565b601f01601f1916919091016060019392505050565b600181811c9082168061089757607f821691505b6020821081141561080557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108cf57600080fd5b919050565b6000604082840312156108e657600080fd5b6040516040810181811067ffffffffffffffff8211171561091757634e487b7160e01b600052604160045260246000fd5b604052610923836108b8565b8152610931602084016108b8565b60208201529392505050565b80151581146107db57600080fd5b813581526040810160208301356109618161093d565b80151560208401525092915050565b60006020828403121561098257600080fd5b6040516020810181811067ffffffffffffffff821117156109b357634e487b7160e01b600052604160045260246000fd5b6040526109bf836108b8565b81529392505050565b600082516109da81846020870161081d565b9190910192915050565b6000602082840312156109f657600080fd5b81516106018161093d56fea2646970667358221220aa14eaff4a5ea0ae4d4a3def65c5b9079bc9298d158e42bbd02c8676a2644a5f64736f6c63430008090033`,
  BytecodeLen: 3340,
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
  "Lender": Lender,
  "Owner": Owner,
  "borrower": borrower
  };
export const _APIs = {
  };
