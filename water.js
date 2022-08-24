const fs = require('fs');
fs.readFile('index.txt', function (err, data) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
});
console.log('程序执行完毕');
// 这里是异步读取文件 先执行console 程序执行完毕 在进行异步读取txt
