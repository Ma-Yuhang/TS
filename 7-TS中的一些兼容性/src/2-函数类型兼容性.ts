export {};

// 参数个数
// 可以将个数少的分配给参数个数多的 参数少的必须是参数多的的类型之一(一个函数必须兼容另一个函数才能分配)
let fn1 = (x: string, y: number) => {};
let fn2 = (x: string) => {};
let fn3 = (x: boolean) => {};

fn1 = fn2;
// fn1 = fn3 // fn1类型参数中不具有boolean类型

// 参数类型
let fn4 = (x: string) => {};
let fn5 = (x: number) => {};

// fn4 = fn5 // 参数类型必须相同

// 返回值类型
let fn6 = (): number => 18;
let fn7 = (): number => 18;
let fn8 = (): string => '22';
fn6 = fn7;
// fn6 = fn8 // 返回值类型必须相同

// 函数的双向协变
// 1.函数的参数支持的是逆变
let fn9 = (x: number) => {};
let fn10 = (x: number | boolean) => {};

fn9 = fn10;
// fn10 = fn9; // 报错
// 2.函数的返回值支持的是正常的协变（即更具体的可以赋值给不具体的）子类型可以赋值给父类型
let fn11 = (): number => {
  return 1;
};
let fn12 = (): number | string => {
  return '1';
};
// fn11  =fn12
fn12 = fn11;
