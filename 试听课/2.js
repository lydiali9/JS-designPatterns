// function CreatePerson(name,age,sex){
//     let obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.sex = sex;
//     obj.sayName = function(){
//         return this.name;
//     }
//     return obj;
// }
// let p1 = CreatePerson("lily",20,"女");
// let p2 = CreatePerson("jack",28,"男");
// console.log(p1.name,p1.age,p1.sex);
// console.log(p2.name,p2.age,p2.sex);
// console.log(p1 instanceof Object) //object

class Shop{
    constructor(name){
        this.name = name;
        this.method = function(){
            return this.name;
        }
    }
    sellCar(){
        var car  = this.createCar();
        //执行A逻辑
        car.A();
        car.B();
        return car;
    }
    createCar(){
        throw new Erorr("父类是抽象类不能直接调用，需要子类重写该方法")
    }
}

class CarChild extends Shop{
        constructor(name){
            super(name);
            this.name = name;
        }
        createCar(){
            let A = function(){
                console.log('执行A业务逻辑');
            }
            let B = function(){
                console.log('执行B业务逻辑');
            }
            return {
                A,
                B
            }
        }
}

var  childClass = new CarChild("大众");
childClass.sellCar();

//1.弱化对象间的耦合,防止代码的重复
//2.重复代码可以放父类编写，子类继承父类的属性和方法，只专注于自己的业务逻辑就行