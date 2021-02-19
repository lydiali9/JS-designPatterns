class Sum {
    sum(a, b) {
        return a + b;
    }
}
class Minus {
    minus(a, b) {
        return a - b;
    }
}
class Multiply {
    multiply(a, b) {
        return a * b;
    }
}
class Divide {
    divide(a, b) {
        return a / b;
    }
}
class Calculator {
    constructor() {
        this.sumObj = new Sum();
        this.minusObj = new Minus();
        this.multiplyObj = new Multiply();
        this.divideObj = new Divide();
    }

    sum(a, b) {
        return this.sumObj.sum(a, b);
    }

    minus(a, b) {
        return this.minusObj.minus(a, b);
    }

    multiply(a, b) {
        return this.multiplyObj.multiply(a, b);
    }

    divide(a, b) {
        return this.divideObj.divide(a, b);
    }
} 

let cal = new Calculator();
console.log(cal.sum(1, 2));