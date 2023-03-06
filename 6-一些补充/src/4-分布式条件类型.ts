export {};

// 1.
type myType<T> = T extends any ? T : never;
type res1 = myType<string | number>;

// 2.从一个类型中剔除掉某些类型 Exclude
type res2 = Exclude<string | number | boolean, boolean>; // 剔除掉boolean类型

// 3.剔除掉null和undefined
type res3 = NonNullable<string | number | null | undefined>; // string | number

// 4.获取函数的返回值类型
type fn = {
  (): number;
};
interface fn1 {
  (): string;
}
type res4 = ReturnType<fn>; // number
type res44 = ReturnType<fn1>; // string

// 5.获取一个类的构造函数组成的元组类型 ConstructorParamsters
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
type res5 = ConstructorParameters<typeof Person>; // [string, number]元组类型
let r5: res5 = ['da', 1];

// 6.获取函数的参数组成的元组类型 Parameters 注意不是 *Paramsters
function fn2(x: boolean, y: string[]) {}
type res6 = Parameters<typeof fn2>; // [boolean, string[]]
let r6: res6 = [true, ['1', '2']];
