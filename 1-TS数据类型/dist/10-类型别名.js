"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let a;
a = '美女1';
a = '美女2';
a = '美女3';
let fn = (a, b) => {
    return b;
};
let obj = {
    name: 'ma',
    age: 20,
    sex: '男',
};
function fn1({ name, age, sex }) {
    console.log(name);
    console.log(age);
    console.log(sex);
}
fn1(obj);
