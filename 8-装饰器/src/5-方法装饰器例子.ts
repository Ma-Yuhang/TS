export {};

function catchErrorDecorator(errorMsg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(errorMsg);
      }
    };
  };
}

class Test {
  userInfo: any = [];

  @catchErrorDecorator('userInfo上不存在name属性')
  getName() {
    return this.userInfo.name;
  }

  @catchErrorDecorator('userInfo上不存在age属性')
  getAge() {
    return this.userInfo.age;
  }
}
let p = new Test();
p.getName();
p.getAge();
