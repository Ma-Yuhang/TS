// 一个类不能同时继承多个类

class Name {
  name = '马宇航';
  getName() {
    console.log('name');
  }
}
class Age {
  age = 18;
  getAge() {
    console.log('age');
  }
}

class Person implements Name, Age {
  name: string;
  age: number;
  getName: () => void;
  getAge: () => void;
}

function Mixins(target: any, from: any[]) {
  from.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      target.prototype[name] = item.prototype[name];
    });
  });
}
Mixins(Person, [Name, Age]);
let p = new Person();
p.getAge();
p.getName();
