// 命名空间与命名空间的合并
namespace A {
  export let a = 10;
}
namespace A {
  export let b = 100;
}

// 命名空间与类的合并 命名空间声明不能位于与之合并的类或函数前
/* class Person {
  show(){
    console.log('show');
  }
  static haha() {
    console.log('haha');
  }
}
namespace Person {
  export const hi = function() { // 当做Person的静态方法
    console.log('hi');
  }
  export const age = 18
}
console.log(Person.age); */

// 命名空间与函数的合并 命名空间声明不能位于与之合并的类或函数前
/* function getCount() {
  getCount.count++;
  console.log(getCount.count);
}
namespace getCount {
  export let count: number = 0;
}
getCount()
getCount()
getCount()
console.log(getCount.count); */

// 命名空间与枚举合并
namespace Gender {
  export const a = 10
}
enum Gender {
  Male,
  Female
}
console.log(Gender);
