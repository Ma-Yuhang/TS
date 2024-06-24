export default {};

// 装饰器的本质就是一个函数

// function testDecorator(constructor: any) {
//   constructor.prototype.uname = '马宇航';
//   constructor.prototype.show = (): void => {
//     console.log(`我是${constructor.prototype.uname}`);
//   };
// }

// @testDecorator
// class Person {}

// let p = new Person(); // 注意这里必须加分号

// (p as any).show();

// 工厂函数
/* function testDecorator(flag: boolean) {
  if(flag) {
    return function (constructor: any) {
      constructor.prototype.uname = "张予曦";
      constructor.prototype.show = (): void => {
        console.log(`我是${constructor.prototype.uname}`);
      };
    };
  }else {
    return function(constructor: any) {}
  }
}

@testDecorator(true)
class Person {}

let p = new Person();
(p as any).show(); */

function testDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    name = 'zs';
    show() {
      console.log('adadad');
    }
  };
}

const Person = testDecorator(class {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
})


let p = new Person('ls');
console.log(p);
p.show()

/* function testDecorator() {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = 'zs';
      show() {
        console.log('show');
      }
    };
  };
}


let person = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
let p = new person('ls')
p.show()
 */