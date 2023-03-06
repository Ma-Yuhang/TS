export default {}

// 枚举类型
// 用于表示固定的几个取值
// 例如人的性别只能是男和女

enum Gender{
  Male,
  Female
}

let val: Gender
val = Gender.Male
val = Gender.Female
// TS中枚举类型的取值默认从0开始，向下依次递增
console.log(Gender.Male);   // 0
console.log(Gender.Female); // 1

// TS中枚举类型的本质就是数值类型 所以赋值数值不会报错

enum Gender2{
  Male = 5, // 可以修改默认开始值
  Female
}

console.log(Gender2.Male);   // 5
console.log(Gender2.Female); // 6

enum Gender3{
  Male, // 默认0
  Female = 100 // 修改第二个值
}

console.log(Gender3.Male);   // 0
console.log(Gender3.Female); // 100

enum Gender4{
  Male = 50, // 都修改
  Female = 100
}

console.log(Gender4.Male);   // 50
console.log(Gender4.Female); // 100