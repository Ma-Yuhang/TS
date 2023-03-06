"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 类的继承
class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('我是父亲', this.name, this.age);
    }
}
class Son extends Father {
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }
    say() {
        super.say(); // 可以调用父类的say
        console.log('我是孩子', this.name, this.age, this.score);
    }
}
let s = new Son('ma', 18, 'A');
s.say();
