"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function fn() {
    const counter = function (n) {
        return 's';
    };
    counter.msg = '1';
    counter.increase = function () { };
    return counter;
}
let fn1 = fn();
fn1(1);
fn1.msg = 'a';
fn1.increase();
