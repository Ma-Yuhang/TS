"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type A = number | string
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(3); // 不具有length属性，报错
loggingIdentity({ length: 10, value: 3 });
// extends与 keyof 结合使用
function fn(obj, keys) {
    let res = [];
    keys.forEach((item) => {
        res.push(obj[item]);
    });
    return res;
}
let obj = {
    name: '马宇航',
    age: 18,
};
console.log(fn(obj, ['name']));
