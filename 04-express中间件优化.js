
// 引入 express 框架
var express = require('express');

// 拿到服务器
var server = express();

// 变量
var dataMg ;

// 1.查询数据代码块，使用中间件 把代码分开，可以看的很清楚
server.use('/qujie/get/require',function(require,response,next){
    console.log('执行第一块代码，查询数据');

    dataMg = 'get 这里查询结果，发送给客户端' ;

    next();
});
// 2.发送数据代码块
server.get('/qujie/get/require',function(require,response){

    console.log('发送数据');

    response.send(dataMg);
});


// POST 请求
server.use('/qujie/post/require',function(require,response,next){
    console.log('执行第一块代码，查询数据');

    dataMg = 'post 这里查询结果，发送给客户端' ;

    next();
});
server.post('/qujie/post/require',function(require,response){
    
        console.log('发送数据');
    
        response.send(dataMg);
    });

// 监听
server.listen('8080');

console.log('监听 8080/ qujie/get/require 端口请求 ');