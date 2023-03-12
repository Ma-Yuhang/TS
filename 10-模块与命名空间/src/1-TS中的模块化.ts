import { obj } from './moduleTest';
console.log(obj);

import Test = require('./moduleTest');
// import { Person } from './moduleTest';

const userInfo: Test.Person = {
  name: '马宇航',
  age: 18,
};
