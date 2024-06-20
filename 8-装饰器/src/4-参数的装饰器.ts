// 参数1: 如果是普通方法，参数1就是类的原型对象，如果是静态方法，就是类本身
// 参数2: 方法名
// 参数3: 参数索引

function paramsDecorator(target: any, key: string, index: number) {
  console.log(target);
  console.log(key);
  console.log(index); // 索引 放在name前为0 age前为1
}
class Test3 {
  getInfo(name: string, @paramsDecorator age: number) {
    console.log(name, age);
  }
}

let p2 = new Test3();
p2.getInfo('马宇航', 18);