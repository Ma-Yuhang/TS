"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 索引类型
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let str = 'a';
// 需求
// 传入两个参数，第一个参数为对象，第二个参数为对象中的key所组成的数组，返回一个数组，数组中存放对应key的值
function getValues(obj, keys) {
    let arr = []; // 类型断言 等价于 let arr = [] as T[K][];
    keys.forEach((key) => {
        arr.push(obj[key]);
    });
    return arr;
}
let obj = {
    name: 'ma',
    age: 18,
};
console.log(getValues(obj, ['name']));
