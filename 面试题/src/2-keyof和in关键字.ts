export {};

// keyof 用来获取获取类型或接口中的每个键
interface Person {
  name: string;
  age: number;
}
type myType = keyof Person; // 'name' | 'age'
let obj: myType = 'name';

// in 用来遍历枚举类型
type Keys = 'a' | 'b' | 'c';
type Obj = {
  [key in Keys]: string;
}; // {a: string, b: string, c: string}

// in 和 keyof 结合使用，可以达到更改某个类型的效果
type A<T> = {
  [key in keyof T]: number; // 使传进来的类型的属性都变成number类型
};
type resA = A<Person>;

type B<T> = {
  readonly [K in keyof T]: T[K]; // 使传进来的属性都变成 只读
};
type resB = B<Person>;
