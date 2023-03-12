// 一个类不能同时继承多个类
class Name {
    constructor() {
        this.name = '马宇航';
    }
    getName() {
        console.log('name');
    }
}
class Age {
    constructor() {
        this.age = 18;
    }
    getAge() {
        console.log('age');
    }
}
class Person {
}
function Mixins(target, from) {
    from.forEach((item) => {
        Object.getOwnPropertyNames(item.prototype).forEach((name) => {
            target.prototype[name] = item.prototype[name];
        });
    });
}
Mixins(Person, [Name, Age]);
let p = new Person();
p.getAge();
p.getName();
