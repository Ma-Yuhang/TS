"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型约束
// 第一种
function fn1(arr) {
    // console.log(arr.length); // 不能通过
    return arr;
}
let f1 = fn1('adc');
// 第二种
function fn2(arr) {
    // 代表的是T类型的数组,所以只能传入数组
    console.log(arr.length);
    return arr;
}
// let f2 = fn2('adada')
let f2 = fn2([1, 2]);
function fn3(arr) {
    console.log(arr.length);
    return arr;
}
// 都必须具备length属性 才可通过
let f3 = fn3('adada');
let f33 = fn3(['ada']);
let f333 = fn3({ length: 2 });
