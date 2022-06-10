const _ = require('lodash')
const R = require('ramda')

const arr = [
  {id:1, name:"RNM", friends: [{name:'none'}]},
  {id:1, name:"Samuel", friends: [{name: 'none'}]},
]

const res = _.uniqBy(arr, e => e.id)
console.log('ld:',res)

const res2 = R.uniqBy(R.prop('friends[0].name'))(arr)
console.log('ra:',res2)