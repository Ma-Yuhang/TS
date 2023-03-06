"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// any表示任意类型 当我们不确定某个值的具体类型时可以使用any
// 在TS中任何类型的值都可以赋值给any类型
// 场景一
// 变量的值会动态改变时，比如来自用户的输入
let value;
value = 'dada';
value = 323;
// 当使用any类型时，将移除类型检查
let n;
n.getValue(); // 并没有getValue这个方法 但是TS不会报错
// 场景二
// 存放各种类型的值的数组
let arr = ['ad', 1, true, undefined];
// void类型
// 在某种程度上来说，void类型像是与any类型相反，它表示没有任意类型
// 当一个函数没有返回值时，其返回值类型为viod
// 在TS中只有null和undefined可以赋值为void类型(null赋值给void需要关闭严格模式"strict": false)
function fn() {
    console.log('哈哈');
    // return 'ad'
}
let x;
x = undefined;
// x = null;
