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
/**
 * 多态
 */
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name; // 实例属性
    }
    Animal2.prototype.eat = function (food) {
        // console.log(`${this.name}吃${food}`);
    };
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.eat = function (food) {
        console.log("\u72D7\u5403" + food);
    };
    return Dog2;
}(Animal2));
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person2.prototype.eat = function (food) {
        console.log("ren\u5403" + food);
    };
    return Person2;
}(Animal2));
var d = new Dog2('狗');
d.eat('肉');
var p = new Person2('ren');
p.eat('shangbing');
