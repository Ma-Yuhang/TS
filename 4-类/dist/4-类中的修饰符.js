"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 类中的修饰符
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log('Person', this.name, this.age, this.sex);
    }
}
let p = new Person('父亲', 45, '男');
// p.say();
console.log(p.name); // 父亲
// console.log(p.age); // 不能被访问
// console.log(p.sex); // 不能被访问
class Student extends Person {
    constructor(name, age, sex, score) {
        super(name, age, sex);
        this.score = score;
    }
    say() {
        console.log('Person', this.name, this.sex, this.score); // this.age不能被访问
    }
}
let s = new Student('学生', 20, '男', 'A');
s.say();
console.log(s.score);
// s.score = 'B' // 不能被修改
