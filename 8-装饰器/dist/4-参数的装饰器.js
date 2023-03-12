"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function paramsDecorator(target, key, index) {
    console.log(target);
    console.log(key);
    console.log(index); // 索引 放在name前为0 age前为1
}
class Test3 {
    getInfo(name, age) {
        console.log(name, age);
    }
}
__decorate([
    __param(1, paramsDecorator)
], Test3.prototype, "getInfo", null);
let p2 = new Test3();
p2.getInfo('马宇航', 18);
