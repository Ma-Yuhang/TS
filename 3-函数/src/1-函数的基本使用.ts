export default {};

// 函数的基本使用

// 1.匿名函数
const fn1 = function (x: number, y: number): number {
  return x + y;
};

// 2.普通函数
function fn2(x: number, y: number): number {
  return x + y;
}

// 3.箭头函数
const fn3 = (x: number, y: number): number => {
  return x + y;
};

// 接口函数
type Fn1 = (n: number) => number;
let fn11: Fn1 = function (num: number): number {
  return num;
};

interface Fn2 {
  (n: number): number;
}
let fn22: Fn2 = function (num: number): number {
  return num;
};

// 在类型别名或者接口中指定了参数的返回值为void 也可以强行返回(不推荐)
type VoidFn = (n: number) => void;
let fn: VoidFn = function (num: number) {
  return num;
};