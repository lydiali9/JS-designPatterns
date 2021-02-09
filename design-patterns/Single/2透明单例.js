// 把类的实际的创建逻辑和单例逻辑分开
function Window(name) {
    this.name = name;
}

Window.prototype.getName = function() {
    console.log(this.name);
}

let CreateSingle = (function() {
    let instance;

    return function(name) {
        if(!instance) {
            instance = new Window(name);
        }
        return instance;
    }
})();

let w1 = new CreateSingle('1');
let w2 = new CreateSingle('2');
console.log(w1 === w2);

// 改进3single.js