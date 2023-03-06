"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 函数重载
// 不使用函数重载
function fn(x, y) {
    // typeof 类型缩小
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'number' && typeof y === 'string') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
}
function fn1(x, y) {
    return x + y;
}
fn1(1, 2);
function star(x, y) { }
