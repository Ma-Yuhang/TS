export {};

// 泛型

// 不使用泛型时
function fn(value: number, n: number) {
  return new Array(n).fill(value);
}
function fn1(value: string, n: number) {
  return new Array(n).fill(value);
}
let arr = fn(8, 3);
let res = arr.map((item) => item.length);
console.log(res);

// 使用泛型(三种方式)
function fn2<T>(value: T, n: number): T[] {
  return new Array(n).fill(value);
}
let fn3 = function <T>(value: T, n: number): T[] {
  return new Array(n).fill(value);
};
let fn4 = <T>(value: T, n: number): T[] => {
  return new Array(n).fill(value);
};
let f2 = fn2<string>('adada', 3);
let f3 = fn3<number>(4, 3);
