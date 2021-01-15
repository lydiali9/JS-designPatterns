/**
 * public:
 * protected:
 * private:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, money, num) {
        var _this = _super.call(this, name, age, money) || this;
        _this.num = num;
        return _this;
    }
    Student.prototype.getName = function () {
        // 在子类中可以访问父类的公有属性 
        console.log("\u6211\u7684\u540D\u5B57" + this.name);
    };
    Student.prototype.getAge = function () {
        // 受保护的属性子类中可以访问
        console.log("\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
    };
    Student.prototype.getMoney = function () {
        // money属于私有的，只能在Person中可以访问
        // console.log(`${this.money}`);
    };
    return Student;
}(Person));
var s1 = new Student('lynn', 29, 1, 1);
// 在其他类中可以访问父类的公有属性
console.log(s1.name);
// 在其他类中不可以访问父类的受保护的属性
// console.log(s1.age);
// money属于私有的，只能在Person中可以访问
// console.log(s1.money); 
