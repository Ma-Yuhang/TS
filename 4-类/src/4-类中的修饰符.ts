export default {};

// 类中的修饰符

class Person {
  // public name: string; // 公共的
  private age: number; // 私有的 只能被其所在的类中被访问
  protected sex: string; // 受保护的 可以被自身及子类访问
  constructor(public name: string, age: number, sex: string) {
    // this.name = name;
    this.age = age;
    this.sex = sex;
  }
  say(): void {
    console.log('Person', this.name, this.age, this.sex);
  }
}
let p = new Person('父亲', 45, '男');
// p.say();
console.log(p.name); // 父亲
// console.log(p.age); // 不能被访问
// console.log(p.sex); // 不能被访问
class Student extends Person {
  readonly score: string;
  constructor(name: string, age: number, sex: string, score: string) {
    super(name, age, sex);
    this.score = score;
  }
  say(): void {
    console.log('Person', this.name, this.sex, this.score); // this.age不能被访问
  }
}
let s = new Student('学生',20,'男','A')
s.say()
console.log(s.score);
// s.score = 'B' // 不能被修改
