"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 参数个数
// 可以将个数少的分配给参数个数多的 参数少的必须是参数多的的类型之一(一个函数必须兼容另一个函数才能分配)
let fn1 = (x, y) => { };
let fn2 = (x) => { };
let fn3 = (x) => { };
fn1 = fn2;
// fn1 = fn3 // fn1类型参数中不具有boolean类型
// 参数类型
let fn4 = (x) => { };
let fn5 = (x) => { };
// fn4 = fn5 // 参数类型必须相同
// 返回值类型
let fn6 = () => 18;
let fn7 = () => 18;
let fn8 = () => '22';
fn6 = fn7;
// fn6 = fn8 // 返回值类型必须相同
// 函数的双向协变
// 1.参数的双向协变
// 注意点：可以多的赋值给少的
let fn9 = (x) => { };
let fn10 = (x) => { };
fn9 = fn10;
// fn10 = fn9; // 报错
// 2.返回值的双向协变（少的赋值给多的）
let fn11 = () => {
    return 1;
};
let fn12 = () => {
    return 1;
};
// fn11  =fn12
fn12 = fn11;
