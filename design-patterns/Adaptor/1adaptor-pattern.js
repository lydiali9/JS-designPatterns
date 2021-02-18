class Power {
    charge() {
        return '220V';
    }
}

class Adaptor {
    constructor() {
        this.power = new Power();
    }

    charge() {
        let v = this.power.charge();
        return `${v}=>12V`
    }
}

class Client {
    constructor() {
        this.adaptor = new Adaptor();
    }

    use() {
        console.log(this.adaptor.charge());
    }
}

let clinet = new Client();
clinet.use();

