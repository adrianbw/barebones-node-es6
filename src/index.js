import { find } from "lodash";
import { test } from "./Utils";
const objs = [{ a: 1, b: 2 }, { a: 2, b: 1 }];
console.log("string");

const obA = find(objs, ["a", 1]);
console.log(JSON.stringify(obA, null, 2));

const str = test();
console.log(str);
