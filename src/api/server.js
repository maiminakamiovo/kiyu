// 导入http模块
const http = require("http")
const fs = require("fs")

// 创建http server 并传入回调函数
// const server = http.createServer(function (request, responce) {
// 回调函数接收 request和responce
// 获取http请求的mothod和url
// console.log(request.method + ":" + request.url);
// 将http响应写入responce 200 同时设置content-Type:text/html
// responce.writeHead(200, { "Contect-Tpye": "text/html" })
// responce.end("hello")

// })

// server.listen(8080)
// console.log('Server is running at http://127.0.0.1:8080/');

// 后续 使用 node server.js 唤醒服务


const server = http.createServer(function (request, respone) {
    let url = request.url
    if (url === "./") {
        fs.readFile("./index.jsx", function (err, data) {
            if (!err) {
                respone.writeHead(200, { "Content-Type": 'text/html;charser=UTF-8' })
                respone.end(data)
            } else {
                throw err
            }
        })
    }
})
server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/');
