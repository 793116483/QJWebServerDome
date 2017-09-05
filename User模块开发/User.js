
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
