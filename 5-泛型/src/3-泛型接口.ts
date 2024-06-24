export {};

// 泛型接口

interface IPerson<T1, T2> {
  name: T1;
  age: T2;
}

let p: IPerson<string, number> = {
  name: '马宇航',
  age: 20,
};

// 泛型接口默认类型
interface IPerson2<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}
let p2: IPerson2<string, string> = {
  name: '马宇航',
  age: '20',
};
