const fs = require('fs');
const data = '';

// 创建可读流
const readerStream = fs.createReadStream('index.txt');
// 设置编码为utf-8
readerStream.setEncoding('UTF8');
// 处理事件流 --> data end and error
readerStream.on('data', function (chunk) {
  // data += chunk
});
readerStream.on('end', function () {
  console.log(data);
});
readerStream.on('error', function () {
  console.log(err.stack);
});

console.log('程序执行完毕');
