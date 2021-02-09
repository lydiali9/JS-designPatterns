// example 2
/**
 * 缺点：
 * 1. 客户端就是使用这个类的使用者必须知道这是一个单例的类，必须主动调用getInstance方法
 * 2. 并不能真正阻止客户端直接new Window()
 * 
 * 解决这两个问题，期待什么？
 * 1. new Window->1透明单例.js
 */
function Window(name) {
    this.name = name;
}

Window.prototype.getName = function() {
    return this.name;
}
// 这是类上的方法，只能通过类来访问，而不能通过实例来访问
Window.getInstance = (function() {
    let instance;
    return function(name) {
        if (!instance) {
            instance = new Window(name);
        }
        return instance;
    }
})();

let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2); // true

// expamle 1
// class Window {
//     constructor(name) {
//         this.name = name; 
//     }

//     static getInstance() {
//         if (!this.instance) {
//             console.log(11);
//             this.instance = new Window();
//         }

//         return this.instance;
//     }
// }

// let w1 = Window.getInstance();
// let w2 = Window.getInstance();
// console.log(w1 === w2); // true