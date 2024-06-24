export default {};

// 函数参数的处理

// 可选参数
let fn1 = (x: number, y?: string): number => {
  return x;
};
fn1(1, '2');
fn1(1);

// 参数的默认值
let fn2 = (x: number = 10, y: string = 'la'): number => {
  return x;
};

// 剩余参数
let fn3 = function (a: number, b: number, ...args: any[]) {};
