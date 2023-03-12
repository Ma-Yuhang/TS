"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 参数跟方法装饰器参数一样，但没有第三个参数
function nameDecorator(target, key) {
    console.log(target);
    console.log(key);
    // 设置返回值
    // 在返回值中设置属性描述
    // const descriptor: PropertyDescriptor = {
    //   writable: false, // 不可修改
    // };
    // return descriptor;
}
class Test2 {
    constructor() {
        this.uname = '马宇航';
    }
}
__decorate([
    nameDecorator
], Test2.prototype, "uname", void 0);
let p = new Test2();
p.uname = 'da';
console.log(p.uname);
