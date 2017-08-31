
// 1.引入 express 框架
var express = require('express');


// 2.引入 body-perser 框架 用来解析 POST 请求数据
var bodyParser = require('body-parser');

// 3直接把 POST 请求体的数据解析出来，存入 require.body
// 3.1解析 www 格式( application/x-www-form-urlencoded ) POST 参数解析器, 是一个 function
var urlencodedParser = bodyParser.urlencoded({extended:true});

// 3.2解析 json 格式 POST 参数解析器 , 是一个 function
var jsonParser = bodyParser.json();


// 4.创建服务器
var server = express();


// 5.使用中间件 use 解析数据
// 5.1 '/qujie/post/www/require' 路由的 POST 请求，解析请求参数
server.use('/qujie/post/www/require',urlencodedParser);

// 5.2 '/qujie/post/json/require' 路由的 POST 请求，解析请求参数
server.use('/qujie/post/json/require',jsonParser);


// 6.POST请求
// 6.1 '/qujie/post/www/require' 的 POST 请求
server.post('/qujie/post/www/require',function(require,response){

    console.log(require.body);

    response.send('qujie www POST 请求后返回的值');
});

// 6.2 '/qujie/post/json/require' 的 POST 请求
server.post('/qujie/post/json/require',function(require,response){
    
        console.log(require.body);
    
        response.send('qujie json POST 请求后返回的值');
});


// 7.监听
server.listen('9090');

console.log('开始监听 9090 端口 POST 请求');
