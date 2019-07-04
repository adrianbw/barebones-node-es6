const _ = require("lodash");
const Utils = require("./Utils");
const objs = [{ a: 1, b: 2 }, { a: 2, b: 1 }];
console.log("string");

const obA = _.find(objs, ["a", 1]);
console.log(JSON.stringify(obA, null, 2));

Utils.test();
