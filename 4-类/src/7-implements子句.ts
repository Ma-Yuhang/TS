export {}

// implements 可以实现接口和抽象类
// 1.实现抽象类
abstract class Person {
  abstract name: string
  abstract show(): void

  // showName() {
  //   console.log(this.name); // 报错
  // }
}
// 如果使用implements实现抽象类的话，抽象类中的方法和属性都必须是抽象的，不能有实现的方法或属性
class Student implements Person {
  name: string = 'ma'
  age: number = 12
  show() {
    console.log('show')
  }
}
let s = new Student()
s.show()

// 2.实现接口或类型别名
interface IPerson {
  name: string
  show(): void
}
// type IPerson = {
//   name: string
//   show(): void
// }

class IStudent implements IPerson {
  name: string = 'ma'
  age: number = 12
  show() {
    console.log('show')
  }
}
let s1 = new IStudent()
s1.show()
