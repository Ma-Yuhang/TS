export {}

// 注意和 abstract 的区别
// implements子句 类实现某个接口 必须重写(可以多属性或方法，不能少)

interface IPersonInfo {
  name: string
  age: number
  sex?: string
  show():void
}
interface IPersonInfo2 {
  abc: string
}
class Person implements IPersonInfo,IPersonInfo2 {
  name: string
  age: number
  abc: string
  constructor(name:string, age: number, abc: string) {
    this.name = name
    this.age = age
    this.abc = abc
  }
  show(): void {
    console.log('ad');
  }
}

interface ITest {
  salary: string
}
class Son extends Person implements ITest { // 继承父类 有了父类的属性和方法的同时必须具有salary
  salary: string = 'a'
}