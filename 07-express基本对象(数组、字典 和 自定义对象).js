
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