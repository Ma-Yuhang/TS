export {};

// 使用extends keyof

interface IKey {
  [props: string]: number;
}

function fn<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let obj = { a: 1, b: 2 };
let res1 = fn(obj, 'a');
// let res2 = fn(obj, 'c'); // 报错
