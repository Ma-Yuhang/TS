export default {};

// 函数接口

interface IFun {
  (x: number, y: number): number;
  age: string;
}

const fn: IFun = function (x: number, y: number): number {
  return x + y;
};
fn.age = '';
let res = fn(1, 2);
console.log(res);
