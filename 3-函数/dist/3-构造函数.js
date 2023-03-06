"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 构造函数
let fn = new Function('a', 'b', 'return a*b'); // 在js中也支持同样写法
let res = fn(2, 3);
console.log(res);
