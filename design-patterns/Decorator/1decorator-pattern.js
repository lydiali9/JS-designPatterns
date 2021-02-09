class Duck {
    constructor(name) {
        this.name = name;
    }

    eat(food) {
        console.log(`${food}`);
    }
}

class TangDuck {
    constructor(name) {
        this.duck = new Duck(name);
    }

    eat(food) {
        this.duck.eat(food);
        console.log('thanks')
    }
}

let t = new TangDuck();
t.eat('apple');
