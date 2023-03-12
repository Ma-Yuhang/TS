"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function methodsDecorator(target, // 普通方法是Test.prototype 静态方法是Test本身
key, // 修饰的方法名
descriptor // 该方法的属性描述符(是否可修改，是否可删除,是否可for in遍历)
) {
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);
    descriptor.value = function () {
        return 'descriptor';
    };
}
class Test {
    constructor(name) {
        this.name = '马宇航';
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static show() {
        console.log('show');
    }
}
__decorate([
    methodsDecorator
], Test.prototype, "getName", null);
// console.log(Test);
console.log(Test.prototype);
let t = new Test('ls');
console.log(t.getName());
