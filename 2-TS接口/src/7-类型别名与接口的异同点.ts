export default {};

// 类型别名与接口的异同点

// 相同点
// 1.都可以描述属性和方法
type type1 = {
  name: string;
  age: number;
};
let t1: type1 = {
  name: 'mayuhang',
  age: 20,
};

interface IinterFace1 {
  name: string;
  age: number;
}
let i1: IinterFace1 = {
  name: 'mayuhang',
  age: 20,
};

// 2.都可以进行扩展
type type2 = {
  a: number;
};
// type使用&进行扩展
type type3 = type2 & {
  b: number;
};
let t3: type3 = {
  a: 1,
  b: 2,
};

interface IinterFace2 {
  a: number;
}
// interface使用extends进行扩展
interface IinterFace3 extends IinterFace2 {
  b: number;
}
let i3: IinterFace3 = {
  a: 1,
  b: 2,
};

// 不同点
// type 可以声明基本数据类型 联合类型 数组 对象 函数
// interface 只可以声明对象和函数
type age = number;
type info = number | string | boolean;
type arrayList = (string | number)[];
type fn = (x: number) => number;
let fn: fn = function (x: number): number {
  return x;
};
type obj = {
  name: string;
  age: number;
};

interface Obj2 {
  name: string;
  age: number;
}
interface Fn1 {
  (x: number): number;
}

let fn1: Fn1 = function (x: number): number {
  return x;
};
