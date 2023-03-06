"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型类
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
// TS虽然能自动进行类型推断 但是p1不推荐
let p1 = new Person('马宇航', 18, '男');
let p2 = new Person('马宇航', 18, '男');
let p3 = new Person('马宇航', 18, '男');
console.log(p1);
console.log(p2);
console.log(p3);
