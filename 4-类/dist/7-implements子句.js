"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, abc) {
        this.name = name;
        this.age = age;
        this.abc = abc;
    }
    show() {
        console.log('ad');
    }
}
class Son extends Person {
    constructor() {
        super(...arguments);
        this.salary = 'a';
    }
}
