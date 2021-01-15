/**
 * 多态:
 * 同一个接口可以不同的实现
 * 保持子类的开放性和灵活性
 * 面向接口编程
 */
class Animal2 {
    name: string;
    constructor(name) {
        this.name = name; // 实例属性
    }

    eat(food) {
        // console.log(`${this.name}吃${food}`);
    }
}

class Dog2 extends Animal2 {
    eat(food) {
        console.log(`${this.name}吃${food}`);
    }
}

class Person2 extends Animal2 {
    eat(food) {
        console.log(`${this.name}吃${food}`);
    }
}

let d = new Dog2('狗');
d.eat('肉');

let p = new Person2('ren');
p.eat('shangbing');
