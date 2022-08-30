const http = require('http');
const url = require('url');
const util = require('util');
const querystring = require('querystring');

// get
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
    });

    const parmes = url.parse(req.url, true).query;
    res.write('网站名:' + parmes.name);
    res.write('\n');
    res.write('网站url:' + parmes.url);
    res.write('\n');
    res.end(util.inspect(url.parse(req.url, true).query));
    res.end();
  })
  .listen(3000);

// post
http
  .createServer(function (a, b) {
    let post = '';
    // 通过a的data事件监听函数, 每当接受到请求体的数据时, 就累加到post变量中
    a.on('data', function (c) {
      post += c;
    });

    // 在end事件触发之后 通过querystring.parse将post解析为真正的post请求格式 然后向客户端返回
    a.on('end', function () {
      post = querystring.parse(post);
      b.end(util.inspect(post));
    });
  })
  .listen(3000);
