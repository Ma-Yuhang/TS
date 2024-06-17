export {}

// 抽象类
// 抽象类作为其他派生类的基类使用，不能被实例化

// 接口和抽象类一样用来约束子类
// 接口只能定义约束，不被定义具体实现 抽象类都可以

// 1.使用 implements 实现抽象类
abstract class Person1 {
  abstract name: string
  abstract show(): void

  // showName() {
  //   console.log(this.name); // 报错
  // }
}
// 如果使用implements实现抽象类的话，抽象类中的方法和属性都必须是抽象的，不能有实现的方法或属性
class Student implements Person1 {
  name: string = 'ma'
  age: number = 12
  show() {
    console.log('show')
  }
}
let s = new Student()
s.show()

// 2.使用 extends 实现抽象类（可以有自己的实现）
abstract class Person2 {
  abstract name: string
  abstract show(): void

  showName() {
    console.log(this.name) // 不会报错
  }
}
class IStudent extends Person2 {
  name: string = 'ma'
  age: number = 12
  show() {
    console.log('show')
  }
}
let s1 = new IStudent()
s1.show()
