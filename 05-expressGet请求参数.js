
// http://192.168.31.200:9090/qujie/get/require?name=qujie&age=24&phoneNum=186666777

var express = require('express');

var server = express();

server.get('/qujie/get/require',function(require,response){

    // require.query 是请求的参数，可以查询
    console.log(require.query.name,require.query.age,require.query.phoneNum);

    response.send(require.query);
});

server.listen('9090');

console.log('开始监听 9090 端口请求');
