"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 函数参数的处理
// 可选参数
let fn1 = (x, y) => {
    return x;
};
fn1(1, '2');
fn1(1);
// 参数的默认值
let fn2 = (x = 10, y = 'la') => {
    return x;
};
// 剩余参数
let fn3 = function (a, b, ...args) { };
