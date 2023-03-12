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