# QJWebServerDome

# 引序：
- **Node.js 采用一系列“非阻塞”库来支持事件循环的方式。Node.js是一个服务器端 JavaScript 解释器 , 也就是说 Node.js 是一个支持 JavaScript 语法编写服务器代码的环境。**


---

# 在MAC下用命令安装 Node.js
##  安装 Homebrew
> **ruby -e “$(curl -fsSL **
**https://raw.githubusercontent.com/Homebrew/install/master/install);**

## 安装 Node 环境
> **brew install node **

## 查看 Node 版本号，判断是否安装成功
> **node -v**

- **注意：当最后一步查看到版号时，表示已经安装成功。那么这个时候即可以使用 node 的操作命令，也可以使用 npm 的操作命令**

---

#  node 和 npm 操作命令的使用

## 创建服务器时的初始化, cd 到指定的目录下

> **npm init**

- **注意：之后会停在一个 package name:(...) 输入包名 ；接下来只需要按 回车键 直到提示 Is this ok? (yes) 输入yes ；即可完成初始化**

## 下载引入 express 框架，即可开始使用 Visual Studio Code 软件进行服务端编码
> **npm install express -save**


## 当编码完服务器代码后，使用下面的命令就可以开起我们编写的服务器代码
> **node 文件名.js**

- **注意：在创建的每个文件名后面添加后缀 .js ，这样可以使得在写代码时有提示**

---
# 实现 WebServer 服务器的一些语法使用

## 实现基于 http 框架模块的服务器
- **引入 http 框架模块**

> // 与 OC 的 import 一样 , 用 http 变量去拿该文件内部的东西

> **var http = require('http');**


- **创建 webserver** 



``` - js
// 默认是 GET 请求
var server =  http.createServer(function(request,response){
// 只要访问服务器就会执行
console.log('请求服务器');

// 响应服务器请求,返回数据 "holle world"
// response.write('holle world');
// response.end();
response.end('holle world',function(request,response){
console.log('服务器完成响应，结束啦');
});

});
```
- **监听 8080 端口号**

> `// 监听端口访问
server.listen(3000,'192.168.31.200');
`

- **客户端访问服务端**

```
/ 请求 manager.requestSerializer =
// AFHTTPRequestSerializer : 请求的参数内所有的值 没有 数组 或 字典 使用这个
// AFJSONRequestSerializer : 请求的参数内所有的值   有 数组 或 字典 使用这个

// 响应 manager.responseSerializer =
// AFHTTPResponseSerializer : 返回的参数内所有的值 没有 数组 或 字典 使用这个
// AFJSONResponseSerializer : 返回的参数内所有的值   有 数组 或 字典 使用这个


AFHTTPSessionManager * manager = [AFHTTPSessionManager manager];

// 请求传的参数中的值没有 数组 或 字典 ，所以使用 AFHTTPRequestSerializer
manager.requestSerializer = [AFHTTPRequestSerializer serializer];

// 响应 
manager.responseSerializer = [AFHTTPResponseSerializer serializer];
// 只有响应有这个类型的设置 , 可以解析返回参数内有 json 数据,原因如下
manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json", @"text/json", @"text/javascript",@"text/html", nil];


// GET 请求 , 192.168.31.200 为服务端网络地址
[manager GET:@"http://192.168.31.200:8080" parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {

NSString * resultText = [[NSString alloc] initWithData:responseObject encoding:kCFStringEncodingUTF8];

NSLog(@"%@",resultText);

} failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {

NSLog(@"%@",error);

}];


// POST 请求 , /qujie/post/www/require 为路由地址
// [manager POST:@"http://192.168.31.200:9090/qujie/post/www/require" parameters:@{@"name":@"qujie",@"age":@(24),@"phone":@"19665568780"} progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {

//  NSString * resultText = [[NSString alloc] initWithData:responseObject encoding:kCFStringEncodingUTF8];

//   NSLog(@"%@\n",resultText);

// } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {

//   NSLog(@"%@",error);

// }];
```

- **注意：首先编写完服务器代码后应该启动服务器， 在客户端 GET 请求成功后，会返回 holle world 给客户端。测式接口也可以用浏览器，在浏览器中直接输入地址：http://192.168.31.200:8080 就能看到数据，这就算是一个简单完整的 webserver 服务器**


### express 模块框架搭建 webServer

``` -js
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

```

### express 路由地址 "/qujie/get/luyou/require"

```
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

} , function sendMessage(require,response){

response.send('express luyou jubing 路由 get 请求');

});


server.listen('8080');

console.log('03-express路由监听');
```
- **调用该 next() 会跳到 sendMessage() 函数 **


### 中间件 use(...)
- **在使用中间件时，请求会路由到第一个中间件代码块，然后执行代码，next() 函数就是为了 跳转到下一块的中间件代码块**
```
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
```

### 解析客户端 Get 请求传的参数

- **require.query : 客户端向服务端请求的参数 , 取里面的值可以直接用点语法**

``` -js
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
```

### 解析客户端 Post 请求传的参数

- **注意：**
- **引入 body-parser 框架模块，就需要使用命令 npm install body-parser -- save 下载代码**

```
// 1.引入 express 框架
var express = require('express');


// 2.引入 body-perser 框架 用来解析 POST 请求数据
var bodyParser = require('body-parser');

// 3直接把 POST 请求体的数据解析出来，存入 require.body
// 3.1解析 www 格式( application/x-www-form-urlencoded ) POST 参数解析器, 是一个 function
var urlencodedParser = bodyParser.urlencoded({extended:true});

// 3.2解析 json 格式( application/json ) POST 参数解析器 , 是一个 function
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

response.send({'other':'qujie www POST 请求后返回的值' , 'body':require.body});
});

// 6.2 '/qujie/post/json/require' 的 POST 请求
server.post('/qujie/post/json/require',function(require,response){

console.log(require.body);

response.send({'other':'qujie json POST 请求后返回的值' , 'body':require.body});
});


// 7.监听
server.listen('9090');

console.log('开始监听 9090 端口 POST 请求');
```

###  js 语法中的 数组、字典创建与使用
- **注意：创建函数时 函数名称必须是小写字母开头，如果是大写的话就会被认为是一个类**

```

// 字典 {}
function dictionaryDome(){

var dict = {'name':'qujie','age':18,'lala':'haha'};

// 向字典中添加键值对
dict.money = 8888888;

dict['aaaa'] = 'aaaa';

console.log(dict);

// 删除字典中的键值
delete dict['lala'] ;

delete dict.age ;

console.log(dict);
};

dictionaryDome();



// 数组 [] 
function arrayDome(){

// 1.数组的下标都是从 0 开始的
var array = ['qujie','19',188];

// 2.向 数组中 添加元素
array.push('aaaa');   

// 2.1 添加元素 
//     1：开始插入下标为 1 的位置
//     0：从开始插入的位置后面连续 0 个 被删除
//     '元素值'：需要插入到数组中的 值
array.splice(1,0,'元素值')

console.log(array);

// 3.删除最后一个元素，数组等同于栈
array.pop();

console.log(array);

// // 3.1 delete 删除 , 这个功能是 只删除了值，位置却还在 ，不行
// delete array[2];

// 3.2 splice 删除 , 功能是 可以删除一连串的元素
//     第一个数字 2 表示删除元素下标的开始
//     第二个数字 3 表示连续删除元素的个数
array.splice(2,3);

console.log(array);

// underscore: js 操作
var underscore = require('underscore');

// 判断是否包含指定的值 , 根据地址判断
// array : 数组
// 'qujie': 指定的值
// 2     : 指定从数组下标为 2 开始向后判断是否包含元素
var isContain = underscore.contains(array,'qujie',2);
console.log(isContain);
};

arrayDome();



var express = require('express');

var server = express();

// 返回数据
var dic = {'name':'qujie','age':18};

server.get('/',function(require,response){
response.send(dic);
});

server.listen(8080);

console.log('开始监听 8080 端口');
```

### 自定义类 与使用

-  **引入 underscore 框架模块 可以用来做判断**

```
// 函数 与 自定义类 区别：函数首字母小写 ，而类名首字母大写

// 函数
function user(){

} ;


// 自定义类
// name , age 是类的属性
function User(name,age){
this.name = name ;
this.age = age ;

// 定义类的函数
this.describe = function (){
console.log('当前的人名为：',this.name ,'年龄为：',this.age);
};
};


// 创建对象时必须使用 new 
var user = new User('qujie',18);

// 打印出 user 对象的属性 和 方法
console.log(user);

// 调用 user 的 describe 方法
user.describe();



var user2 = new User('qujie',18);
// 引入 underscore 框架模块
var underscore = require('underscore');

// underscore.isEqual(user,user2) 是根据地址判断的，并非值的判断
// var isEque = underscore.isEqual(user,user2);

// underscore.contains([user],user2) 也是根据地址判断，并非值的判断
var isEque = underscore.contains([user],user2);

console.log(isEque);
```

### 模块开发

- **./ ：表示当前文件目录下**
- **Tools.js 文件在 "./Until模块开发" 目录下**

```
// 将一些基本变量暴露到外面，使可以在外面使用

var age = 18 ;
var name = 'qujie';

exports.age = age ;
exports.name = name ;


function describe(){

console.log('name:',name , 'age:',age);
}

exports.describe = describe ;
```

- **User.js 文件在 "./User模块开发" 目录下**

```
// 自定义类暴露到外面，供外面使用

function User(name,age){
this.name = name ;
this.age = age ;

this.describe = function(){
console.log('name:',this.name,'age:',this.age);
}
}

// 导出
module.exports = User ;


// 注意：这样的使用是 不正确的
// exports.User = User ;


// 注意：如果当前文件使用了 module 就不能用 exports 导入，不然无法使用 console.log(User.phoneNum);
// var phoneNum = 18665568889 ;
// exports.phoneNum = phoneNum ;
```

- **在外面的文件 express模块开发.js 中使用 User.js 和 Tools.js 中内容**
```
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
```
