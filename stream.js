const fs = require('fs');
let data = '';

// 创建可读流
const readerStream = fs.createReadStream('index.txt');
// 设置编码为utf-8
readerStream.setEncoding('UTF8');
// 处理事件流 --> data end and error
readerStream.on('data', function (chunk) {
  data += chunk;
});
readerStream.on('end', function () {
  console.log(data);
});
readerStream.on('error', function () {
  console.log(err.stack);
});

console.log('程序执行完毕');

// 文件写入流
const writerStream = fs.createWriteStream('index.txt');
// 使用UTF8写入数据
let data2 = '双城记';
writerStream.write(data2, 'UTF8');
//标记文件末尾
writerStream.end();
// 处理流事件 --> finish,error
writerStream.on('finish', function () {
  console.log('写入完成');
});
writerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('程序执行完毕');
