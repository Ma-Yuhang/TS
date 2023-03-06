"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型
// 不使用泛型时
function fn(value, n) {
    return new Array(n).fill(value);
}
function fn1(value, n) {
    return new Array(n).fill(value);
}
let arr = fn(8, 3);
let res = arr.map((item) => item.length);
console.log(res);
// 使用泛型(三种方式)
function fn2(value, n) {
    return new Array(n).fill(value);
}
let fn3 = function (value, n) {
    return new Array(n).fill(value);
};
let fn4 = (value, n) => {
    return new Array(n).fill(value);
};
let f2 = fn2('adada', 3);
let f3 = fn3(4, 3);
