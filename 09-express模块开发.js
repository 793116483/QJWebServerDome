
// 导入自定义的工具模块
var tool = require('./Until模块开发/Tools');

// 可以直接这样取
// tool.age = 18;
// tool.name ;
tool.describe();


// 导入自定义类
var User = require('./User模块开发/User');
var user = new User('qujie',20);
// 使用类的对象方法
user.describe();


// 导入 express 框架
var express = require('express');

var server = express();

server.get('/',function(require,response){

    // 自动把 tool 暴露在外面的变量转成Json字典
    // response.send(tool);

    // 自动把 user 对象的属性转成Json字典
    response.send(user);
});

server.listen('8080');

console.log('开始监听模块开发 8080 端口');