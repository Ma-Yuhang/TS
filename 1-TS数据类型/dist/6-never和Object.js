"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// never类型表示的是那些永不存在的值的类型
// 例如：never类型是那些总会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 变量也可能是never类型，当它们被永不为真的类型保护所约束时
// 注意点：never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型
// any也不可以赋值给never类型
// never 类型是那些总会抛出异常的
function error(msg) {
    throw msg;
}
error('错误');
function fail() {
    return error('lal');
}
// 返回never的函数必须具有永远无法到达的终点
function fn() {
    while (true) { }
}
// object类型
let obj;
// obj = 1
obj = {
    a: 1,
    b: 2,
};
