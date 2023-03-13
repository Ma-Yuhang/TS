export {};

// extends 关键字
interface ILengthwise {
  length: number;
}
// type A = number | string

function loggingIdentity<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdentity(3); // 不具有length属性，报错
loggingIdentity({ length: 10, value: 3 });

// extends与 keyof 结合使用
function fn<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  let res = <T[K][]>[];
  keys.forEach((item) => {
    res.push(obj[item]);
  });
  return res;
}
let obj = {
  name: '马宇航',
  age: 18,
};
console.log(fn(obj, ['name']));
