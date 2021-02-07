class Plant {
    constructor(name) {
        this.name = name;
    }

    grow() {
        console.log('我正在生长'); 
    }
}

class Apple extends Plant {
    constructor (name, flavor) {
        super(name);
        this.flavor = flavor;
    }
}

class Orange extends Plant {
    constructor (name, flavor) {
        super(name);
        this.flavor = flavor;
    }
}
// 工厂一般是接口，规定子类必须实现的方法
// 依赖抽象而不依赖实现
// 接口只有方法定义，没有方法实现；如果一个类要实现该接口，就必须实现该接口中的方法
class Factory {
    create() { }
}

class AppleFactory extends Factory {
    static create () {
        return new Apple('apple', 'tian');
    }
}

class OrangeFactory extends Factory {
    static create () {
        return new Orange('orange', 'suan');
    }
}

let apple = AppleFactory.create();
console.log(apple);

let orange = OrangeFactory.create();
console.log(orange);

// 如果想再加入西瓜不用改以前的方法和实例，重新添加西瓜的方法实例即可；

// 一般会跟配置对象配合
let setting = {
    'apple': AppleFactory,
    'orange': OrangeFactory
}
let apple = setting['apple'].create();
