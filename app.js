// npm - global command, comes tih node
// npm --version

// local dependency - use it only in this particular event
// npm i <packageName>

// global dependency = use it in any project
// npm instal -g <packageName>
// sudo npm install -g <packagedName> (mac)

// npm init (step by step, press enyter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
