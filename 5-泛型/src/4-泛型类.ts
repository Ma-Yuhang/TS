export {};

// 泛型类

class Person<T1, T2> {
  name: T1;
  age: T2;
  sex: T1;
  constructor(name: T1, age: T2, sex: T1) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}
// TS虽然能自动进行类型推断 但是p1不推荐
let p1 = new Person('马宇航', 18, '男');
let p2 = new Person<string, number>('马宇航', 18, '男');
let p3: Person<string, number> = new Person('马宇航', 18, '男');
console.log(p1);
console.log(p2);
console.log(p3);
