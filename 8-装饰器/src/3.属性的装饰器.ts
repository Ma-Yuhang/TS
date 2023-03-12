// 参数跟方法装饰器参数一样，但没有第三个参数
function nameDecorator(target: any, key: string): any {
  console.log(target);
  console.log(key);

  // 设置返回值
  // 在返回值中设置属性描述
  // const descriptor: PropertyDescriptor = {
  //   writable: false, // 不可修改
  // };
  // return descriptor;
}

class Test2 {
  @nameDecorator
  uname = '马宇航';
}

let p = new Test2();
p.uname = 'da'
console.log(p.uname);
