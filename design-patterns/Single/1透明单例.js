// 透明单例
/**
 * 缺点：
 * 1. 违反了单一这个原则
 */
let Window = (function() {
    let window;
    let Window = function(name) {
        if (window) {
            return window;
        } else {
            this.name = name;
            return (window = this);
        }
    }

    return Window;
})();

/**
 * 1. 创建一个this=空对象
 * 改进如2透明单例.js
 */

let w1 = new Window();
let w2 = new Window();
console.log(w1 === w2); // true
