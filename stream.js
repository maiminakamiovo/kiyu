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
let data2 =
  '双城记 ' +
  '这是一个最好的时代，这是一个最坏的时代；\n' +
  '这是一个智慧的年代，这是一个愚蠢的年代；\n' +
  '这是一个光明的季节，这是一个黑暗的季节；\n' +
  '这是希望之春，这是失望之冬；\n' +
  '人们面前应有尽有，人们面前一无所有；\n' +
  '人们正踏上天堂之路，人们正走向地狱之门。';

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
