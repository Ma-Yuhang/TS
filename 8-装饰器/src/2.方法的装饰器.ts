function methodsDecorator(
  target: any, // 普通方法是Test.prototype 静态方法是Test本身
  key: string, // 修饰的方法名
  descriptor: PropertyDescriptor // 该方法的属性描述符(是否可修改，是否可删除,是否可for in遍历)
) {
  // console.log(target);
  // console.log(key);
  // console.log(descriptor);
  descriptor.value = function(){
    return 'descriptor'
  }
}

class Test {
  name: string = '马宇航';
  constructor(name: string) {
    this.name = name;
  }
  @methodsDecorator
  getName() {
    return this.name;
  }
  static show() {
    console.log('show');
  }
}
// console.log(Test);
console.log(Test.prototype);
let t = new Test('ls')
console.log(t.getName());

