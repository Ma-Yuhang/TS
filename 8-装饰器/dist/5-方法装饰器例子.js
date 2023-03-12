"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function catchErrorDecorator(errorMsg) {
    return function (target, key, descriptor) {
        const fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (error) {
                console.log(errorMsg);
            }
        };
    };
}
class Test {
    constructor() {
        this.userInfo = [];
    }
    getName() {
        return this.userInfo.name;
    }
    getAge() {
        return this.userInfo.age;
    }
}
__decorate([
    catchErrorDecorator('userInfo上不存在name属性')
], Test.prototype, "getName", null);
__decorate([
    catchErrorDecorator('userInfo上不存在age属性')
], Test.prototype, "getAge", null);
let p = new Test();
p.getName();
p.getAge();
