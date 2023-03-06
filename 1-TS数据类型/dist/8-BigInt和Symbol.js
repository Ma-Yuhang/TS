"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 高于ES2020时可用
let a = 100n;
let b = BigInt(100);
console.log(a === b); // true
let x = Symbol('key');
let y = Symbol('key');
console.log(x === y); // false
