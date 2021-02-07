// Demo 1
class Animal {
    constructor(name) {
        this.name = name; // 实例属性
    }

    eat(food) {
        console.log(`${this.name}吃${food}`);
    }
}

// let animal = new Animal('dog');
// animal.eat('meat');

// Demo 2继承
class Dog extends Animal {
    constructor() {
        super('dog');
    }

    speak() {
        console.log('wangwangwang');
    }
}

let dog = new Dog();
dog.speak();
dog.eat('shi');

// 面向对象的三种特性： 封装 继承 多态