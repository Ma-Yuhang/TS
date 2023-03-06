export default {};

// static
class Fn {
  static age = 18;
  static say() {
     // static声明的函数中this指向Fn 而在constructor中的this指向被创建出来的实例
    console.log('我今年' + this.age + '岁了');
  }
}

Fn.say();
