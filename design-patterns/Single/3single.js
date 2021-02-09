// 把类的实际的创建逻辑和单例逻辑分开
// 封装变化
function Window(name) {
    this.name = name;
}

Window.prototype.getName = function() {
    console.log(this.name);
}

function Dialog(title, content) {
    this.title = title;
    this.content = content;
}

let CreateSingle = function(Constructor) {
    let instance;

    return function() {
        if(!instance) {
            Constructor.apply(this, arguments);
            // this.__protp__  = Constructor.prototype;
            Object.setPrototypeOf(this, Constructor.prototype);
            instance = this;
        }
        return instance;
    }
};

let createWindow = CreateSingle(Window);
let w1 = createWindow('123123123');
w1.getName();
let w2 = createWindow('sdfsfdf');

console.log(w1 === w2);

let createDialog = CreateSingle(Dialog);
let d1 = createWindow('asdasd');
let d2 = createWindow('sdfsfdf');

console.log(d1 === d2);

// 缺点： 不够优雅，改进如4single.js