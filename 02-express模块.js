// express:搭建 webServer

// 1.引入 express 模块
var express = require('express');

// 2.创建服务器
var webServer = express();

// 2.1 处理 get 请求
webServer.get('/qujie/web/server/get/require',function(require,response){
    console.log('收到 get 请求');

    // 发送给客户端数据
    response.send('get 瞿杰 说2017年8月30号的天气很好，也很热');
});

webServer.post('/qujie/web/server/post/require',function(require,response){
    console.log('收到 post 请求');

    // 发送给客户端数据
    response.send('post 瞿杰 说2017年8月30号的天气很好，也很热');
});

// 3.监听，输入端口号，第二个参数本服务端地址 可以省去
webServer.listen('8080');

console.log('监听8080商品 get 请求');

