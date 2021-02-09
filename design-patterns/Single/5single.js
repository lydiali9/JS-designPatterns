// 把类的实际的创建逻辑和单例逻辑分开
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

    let SingleConstructor = function() {
        if(!instance) {
            // 改造了继承的方法（类继承）
            instance = new Constructor(...arguments);
        }
        return instance;
    }
    return SingleConstructor;
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

// 改进继承的方式5single.js
