let Plant = require('./plant');
let Factory = require('./factory');

class Orange extends Plant {
    constructor (name, flavor) {
        super(name);
        this.flavor = flavor;
    }
}

class OrangeFactory extends Factory {
    static create () {
        return new Orange('orange', 'suan');
    }
}

module.exports = OrangeFactory;