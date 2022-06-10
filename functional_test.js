var R =  require('ramda')

R.dropWhile(R.gt(3.1))([1,2,1,3,4,5,6,7])

const _ = require('lodash');

const defaultOpt = {
  Name: "",
  Type: 0, 
  Region: "", 
  Radius: undefined, 
  GroupID: -1, 
  Address: "", 
  RequirePassengerFlowStatistics:0};
_.merge(defaultOpt, {Name:"undefined"});

function baseRequest(url,method,data,defaultVal = []) {
  return {
    url,
    method,
    data,
    defaultVal
  }
}

const curriedRequest = _.curry(baseRequest);
const baseList = curriedRequest(_,_,_,[])

baseList('person','get',{})
curriedRequest(_,'get',undefined)('good?')

const nodes = [
  {isRoot:true, ID: -1, Name: 'Root'},
  {isGroup:true, ID: 1, Name: 'G1'},
  {isStop:true, ID: 2, Name: 'S1'},
];
const targetNode = {isGroup:true, ID: 1, Name: 'G1'};
const res = _.find(nodes,{
  // isRoot: targetNode.isRoot,
  // isGroup: targetNode.isGroup,
  // isStop: targetNode.isStop,
  ...targetNode
})
console.log(res);