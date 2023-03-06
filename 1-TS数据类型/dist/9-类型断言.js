"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 类型断言
// 1、<想要成为的类型>变量名
// 2、变量名 as 想要成为的类型
let str = 'faskfkjfan';
// 方式一
console.log(str.length);
// 方式二
console.log(str.length);
// function typeAs(x: string | number) {
//   console.log((<string>x).length);
// }
function typeAs(x) {
    console.log(x.length);
}
typeAs('jsdkfasdjbfkj');
