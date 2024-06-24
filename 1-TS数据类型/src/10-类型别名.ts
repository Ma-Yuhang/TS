export default {};

// 类型别名

// 1.定义一个美女类型
type beautys = '美女1' | '美女2' | '美女3';
let a: beautys;
a = '美女1';
a = '美女2';
a = '美女3';
// a = 3
// a = true
// a = 'ada'

// 2.函数类型(接收两个参数，第一个参数为number类型，第二个参数为string类型，返回值为number类型)
type myfun = (x: number, y: string) => string;

let fn: myfun = (a: number, b: string): string => {
  return b;
};

// 3.对象类型
type user = {
  name: string;
  age: number;
  sex: string;
};
let obj: user = {
  name: 'ma',
  age: 20,
  sex: '男',
};
function fn1({ name, age, sex }: user) {
  console.log(name);
  console.log(age);
  console.log(sex);
}
fn1(obj);
