"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    A.a = 10;
    let B;
    (function (B) {
        B.b = 100;
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
// 简化命名空间
var b = A.B.b;
console.log(A.a);
console.log(A.B.b);
console.log(b);
const namespaceTest_1 = require("./namespaceTest");
console.log(namespaceTest_1.B.b);
