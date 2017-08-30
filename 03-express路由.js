
var express = require('express');

var server = express();


// 1.简单的路由功能，就是添加请求地址
server.get('/qujie/get/luyou/require',function(require,response){

    // get 请求
    console.log('客户端 get 请求 服务端');

    response.send('express 路由 get 请求');
});


// 2.或是使用路由句柄，对照上面的代码不同之处
// 特点：第一个函数多了一个 next 参数，紧接着多了一个函数b 用来发送数据给客户端的
server.get('/qujie/get/luyou/jubing/require',function(require,response,next){
    // get 请求
    console.log('客户端 get 请求 服务端');

    // 从数据库查询 获取数据，然后把数据发送给客户端
    next();
    
} , function(require,response){
    
    response.send('express luyou jubing 路由 get 请求');
    
});


server.listen('8080');

console.log('03-express路由监听');