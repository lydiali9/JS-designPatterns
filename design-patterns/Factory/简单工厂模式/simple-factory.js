// 缺点： 
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
// 直接new有什么缺点
// 1. 耦合 2. 依赖具体的实现
// new Apple();
// new Orange();

// 简单工厂
// 1. 开闭原则（对修改关闭，对扩展开放）
class Factory {
    static create (type) {
        switch (type) {
            case 'apple':
                return new Apple('apple', 'tian');
            case 'orange':
                return new Orange('orange', 'suan');
            default:
                throw new Error('error');
        } 
    }
}

let apple = Factory.create('apple');
console.log(apple.flavor);
let orange = Factory.create('orange');
console.log(orange.flavor);
