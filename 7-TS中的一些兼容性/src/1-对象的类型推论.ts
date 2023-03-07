export {};

type myType = {
  name: string;
};
// 自动类型推论
// let res: myType = { // 报错
//   name: '',
//   age: 19
// }

// 使用一个变量接收 无法正确类型推论(只能多属性，不能少属性)
let n1 = {
  name: '',
  age: 28,
};
let res: myType = n1;