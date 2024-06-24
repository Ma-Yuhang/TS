export default {}

// 接口

interface IFullName {
  firstName: string,
  lastName: string
}

let obj: IFullName = {
  firstName: '马',
  lastName: '宇航'
}
function fn({firstName, lastName}: IFullName) {
  
}
fn(obj)