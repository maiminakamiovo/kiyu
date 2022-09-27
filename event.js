// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));
// // node当前支持的字符编码格式包括
// // ascil utf-8 utf16le-2或者4个字节

// // 创建一个长度为10且用0填充的Buffer
// const buf1 = Buffer.alloc(10);

// const buf2 = Buffer.alloc(10, 1);
// console.log(buf1);
// console.log(buf2);

// // 创建一个长度为10 且未初始化的Buffer.
// // 这个方法比调用 Buffer.alloc()更快
// // 但返回的Buffer实例可能包含旧数据
// // 因此需要使用fill()和write()重写
// const buf3 = Buffer.allocUnsafe(10);

// // 创建一个包含[0x1,0x2,0x3]的Buffer
// const buf4 = Buffer([1, 2, 3]);

// // 创建一个包含 UTF-8字节 [0x74,0xc3,0xa9,0x73,0,73]的buffer
// const buf5 = Buffer.from('text');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const targetThis = 9
let arrayMap=[]
for (let index = 0; index < array.length; index++) {
    if (array[index] + array[index + 1] === 9) {
        console.log(array[index], array[index + 1]);
        const indexOne = array.findIndex(dd => dd === array[index])
        const indexTwo = array.findIndex(dd => dd === array[index + 1])
        console.log(indexOne, indexTwo);
    }
}


function test(person) {
    person.age = 26
    person = {
      name: 'hzj',
      age: 18
    }
    return person
  }
  const p1 = {
    name: 'fyq',
    age: 19
  }

  const p2 = test(p1)
  console.log(p2);
  console.log(p1);


//   原始数据类型 除了 null 都可以被typeof 判断   引用数据类型除了 function外都会被判断Object
