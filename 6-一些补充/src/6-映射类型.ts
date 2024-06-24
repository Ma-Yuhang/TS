export {};

// 映射类型
interface IPerson {
  name: string;
  age: number;
}
// 将一个类型的属性全部变为只读 可选
type myType<T> = {
  // 相当于对象的遍历，让每一个键都变成 只读
  readonly [K in keyof T]: T[K];
};
type myType1<T> = {
  // 相当于对象的遍历，让每一个键都变成 只读
  [K in keyof T]?: T[K];
};
type res = myType<IPerson>; // 属性都是只读的
type res1 = myType1<IPerson>; // 属性都是可选的


// 通过 + - 指定添加或删除
interface IPerson2 {
  readonly name?: string;
  readonly age?: number;
}
type myType2<T> = {
  // 相当于对象的遍历，让每一个键都变成 只读
  -readonly[K in keyof T]-?: T[K]; // 指定删除 可选 只读
};
type res2 = myType2<IPerson2>; // 那么每个属性都是 正常情况

// 通过关键字设置 只读 和 可选
interface IPerson3 {
  name: string;
  age: number;
}
type res3 = Readonly<IPerson3> // Readonly
interface IPerson4 {
  name: string;
  age: number;
}
// Partial 将必选变成可选
type res4 = Partial<IPerson4> 
interface IPerson5 {
  name?: string;
  age?: number;
}
// Required 将可选变成必选
type res5 = Required<IPerson4>