export default {};

// 类的继承

class Father {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log('我是父亲', this.name, this.age);
  }
}
class Son extends Father {
  score: string;
  constructor(name: string, age: number, score: string) {
    super(name, age);
    this.score = score;
  }
  say() {
    super.say(); // 可以调用父类的say
    console.log('我是孩子', this.name, this.age, this.score);
  }
}

let s = new Son('ma', 18, 'A');
s.say();
