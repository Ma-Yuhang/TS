export {};

class Person {
  private _name = '马宇航';
  age: number = 12
  get name(): string {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  constructor(age: number) {
    this.age = age
  }
}

let p = new Person(18)
console.log(p.name);
console.log(p.age);
