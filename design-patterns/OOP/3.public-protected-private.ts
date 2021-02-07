/**
 * 封装
 * public: 公有
 * protected: 受保护的
 * private: 私有
 */

class Person {
    public name: string; // 共有属性，只有自己，自己的类，其他类都可以访问；
    protected age: number; // 受保护的属性， 自己，自己的子类可以访问，其他类不行访问；
    private money: number; // 私有的， 自己能访问，自己的子类和其他类都不能访问；
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

class Student extends Person {
    public num: number;
    constructor(name, age, money, num) {
        super(name, age, money);
        this.num = num;
    }

    getName() {
        // 在子类中可以访问父类的公有属性 
        console.log(`我的名字${this.name}`);
    }

    getAge() {
        // 受保护的属性子类中可以访问
        console.log(`我今年${this.age}岁了`) 
    }   

    getMoney() {
        // money属于私有的，只能在Person中可以访问
        // console.log(`${this.money}`);
    }
}

let s1 = new Student('lynn', 29, 1, 1);
// 在其他类中可以访问父类的公有属性
console.log(s1.name);
// 在其他类中不可以访问父类的受保护的属性
// console.log(s1.age);
// money属于私有的，只能在Person中可以访问
// console.log(s1.money); 
