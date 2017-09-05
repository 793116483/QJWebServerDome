
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
var underscore = require('underscore');

// underscore.isEqual(user,user2) 是根据地址判断的，并非值的判断
// var isEque = underscore.isEqual(user,user2);

// underscore.contains([user],user2) 也是根据地址判断，并非值的判断
var isEque = underscore.contains([user],user2);

console.log(isEque);