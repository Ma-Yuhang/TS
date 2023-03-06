"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// unknown
// 1.任何类型都可以分配给unknown类型
let b;
b = 1;
b = '2';
b = false;
b = [];
// 2.不能将unknown类型分配给除了unknown类型和any类型的其他类型
let a = 18;
// let c: number = a
// let c1: string = a
let c2 = a;
let c3 = a;
// let c4: never = a
// 解决方案
// (1)使用类型断言
let c = a;
console.log(c);
// (2)使用typeof类型缩小
let d;
if (typeof a === 'number') {
    d = a;
    console.log(d);
}
