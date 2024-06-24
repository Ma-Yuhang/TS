export default {};

// 1、可选属性
interface IFullName {
  firstName: string;
  lastName: string;
  age?: number;
}
let obj: IFullName = {
  firstName: '马',
  lastName: '宇航',
};

// 2、只读属性
interface AAA {
  readonly a: number;
}
interface AAA {
  // 可扩展
  b: number;
}

let x: AAA = {
  a: 1,
  b: 2,
};
// x.obj = {}
// x.a = 111