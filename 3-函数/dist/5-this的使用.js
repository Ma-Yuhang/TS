"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// this的使用
class Fn1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        return this.x + this.y;
    }
}
class Fn2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        return this.x + this.y;
    }
}
class Fn3 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return 1; // 不可以使用this
    }
}
let fn2 = new Fn2(1, 2);
let fn3 = new Fn3(3, 4);
console.log(fn3.sum());
