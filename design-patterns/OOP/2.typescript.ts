// command: tsc 将ts转换成js 
// 运行完的结果： 多出一个2.typescript.js文件， 再去运行转换后的文件
function greeting(user: string) {
    return 'hello ' + user;
}
let user = 'lynnli';
console.log(greeting(user));