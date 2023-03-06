export {}

// 抽象类
// 抽象类作为其他派生类的基类使用，不能被实例化

// 接口和抽象类一样用来约束子类
// 接口只能定义约束，不被定义具体实现 抽象类都可以
abstract class Person {
  abstract name: string
  abstract show():void

  showName() {
    return this.name
  }
}

class Student extends Person {
  name: string = 'ma'
  age: number = 12
  show() {
    console.log('show');
  }
}
let s = new Student()
console.log(s.showName());
s.show()
