
// 将一些基本变量暴露到外面，使可以在外面使用

var age = 18 ;
var name = 'qujie';

exports.age = age ;
exports.name = name ;


function describe(){

    console.log('name:',name , 'age:',age);
}

exports.describe = describe ;