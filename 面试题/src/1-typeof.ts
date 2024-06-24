export {};

// typeof 操作符 用来获取一个变量声明或对象的类型
let func = function (num: number): number {
  return num;
};

type myType = typeof func; // (num: number) => number

console.log(typeof func); // function
