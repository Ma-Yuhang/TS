// 参数1: 如果是实例属性，参数1就是类的原型对象，如果是静态属性，就是类本身
// 参数2: 属性名
function nameDecorator(target: any, key: string): any {
  console.log(target);
  console.log(key);
}

class Test2 {
  @nameDecorator
  uname = '马宇航';
}

let p = new Test2();
console.log(p.uname);
