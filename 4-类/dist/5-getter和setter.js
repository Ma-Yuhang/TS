"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(age) {
        this._name = '马宇航';
        this.age = 12;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
let p = new Person(18);
console.log(p.name);
console.log(p.age);
