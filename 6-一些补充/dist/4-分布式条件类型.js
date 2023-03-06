"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5.获取一个类的构造函数组成的元组类型 ConstructorParamsters
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let r5 = ['da', 1];
// 6.获取函数的参数组成的元组类型 Parameters 注意不是 *Paramsters
function fn2(x, y) { }
let r6 = [true, ['1', '2']];
