
// 引入模块 ，与 OC 的 import 一样
var http = require('http');

// 创建 webserver
var server =  http.createServer(function(request,response){
    // 只要访问服务器就会执行
    console.log('请求服务器');

    // 响应服务器请求
    // response.write('holle world');
    // response.end();
    response.end('holle world',function(request,response){
        console.log('服务器完成响应，结束啦');
    });

});

// 监听端口访问
server.listen(3000,'192.168.31.200');

console.log('监听3000端口');