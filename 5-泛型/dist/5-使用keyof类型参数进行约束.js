"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(obj, key) {
    return obj[key];
}
let obj = { a: 1, b: 2 };
let res1 = fn(obj, 'a');
// let res2 = fn(obj, 'c'); // 报错
