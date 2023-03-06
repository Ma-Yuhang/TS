"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Fn1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        return this.x + this.y;
    }
}
let fn1 = new Fn1(1, 2);
console.log(fn1.sum());
