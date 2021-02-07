class Person3 {
    constructor() {}
    buy() {}
}

class Man extends Person3 {
    constructor(gender) {
        super();
        this.gender = gender;
    }

    buy() {
        console.log('buy ipad');
    }
}

class Women extends Person3 {
    constructor(gender, name) {
        super();
        this.gender = gender;
        this.name = name;
    }

    buy() {
        console.log('buy package');
    }
}

let person = new Person3();
let man = new Man('man');
let women = new Women('woman', 'lynn');
person.buy();
man.buy();
women.buy();

let jiang = {
    marry(w: Women) {
        console.log(`将和${w.name}去吃饭`);
    }
}

jiang.marry(new Women('women', 'rose'))