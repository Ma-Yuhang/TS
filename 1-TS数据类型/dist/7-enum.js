"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 枚举类型
// 用于表示固定的几个取值
// 例如人的性别只能是男和女
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let val;
val = Gender.Male;
val = Gender.Female;
// TS中枚举类型的取值默认从0开始，向下依次递增
console.log(Gender.Male); // 0
console.log(Gender.Female); // 1
// TS中枚举类型的本质就是数值类型 所以赋值数值不会报错
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Male"] = 5] = "Male";
    Gender2[Gender2["Female"] = 6] = "Female";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Male); // 5
console.log(Gender2.Female); // 6
var Gender3;
(function (Gender3) {
    Gender3[Gender3["Male"] = 0] = "Male";
    Gender3[Gender3["Female"] = 100] = "Female"; // 修改第二个值
})(Gender3 || (Gender3 = {}));
console.log(Gender3.Male); // 0
console.log(Gender3.Female); // 100
var Gender4;
(function (Gender4) {
    Gender4[Gender4["Male"] = 50] = "Male";
    Gender4[Gender4["Female"] = 100] = "Female";
})(Gender4 || (Gender4 = {}));
console.log(Gender4.Male); // 50
console.log(Gender4.Female); // 100
