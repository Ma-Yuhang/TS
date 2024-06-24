export default {};

// 类型断言
// 1、<想要成为的类型>变量名
// 2、变量名 as 想要成为的类型

let str = 'faskfkjfan';

// 方式一
console.log((<string>str).length);
// 方式二
console.log((str as string).length);

// function typeAs(x: string | number) {
//   console.log((<string>x).length);
// }
function typeAs(x: string | number) {
  console.log((x as string).length);
}
typeAs('jsdkfasdjbfkj');
