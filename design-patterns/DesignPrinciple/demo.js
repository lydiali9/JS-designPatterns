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
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.buy = function () { };
    return Person3;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(gender) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        return _this;
    }
    Man.prototype.buy = function () {
        console.log('buy ipad');
    };
    return Man;
}(Person3));
var Women = /** @class */ (function (_super) {
    __extends(Women, _super);
    function Women(gender, name) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        _this.name = name;
        return _this;
    }
    Women.prototype.buy = function () {
        console.log('buy package');
    };
    return Women;
}(Person3));
var person = new Person3();
var man = new Man('man');
var women = new Women('woman', 'lynn');
person.buy();
man.buy();
women.buy();
var jiang = {
    marry: function (w) {
        console.log("\u5C06\u548C" + w.name + "\u53BB\u5403\u996D");
    }
};
jiang.marry(new Women('women', 'rose'));
