let Plant = require('./plant');
let Factory = require('./factory');

class Apple extends Plant {
    constructor (name, flavor) {
        super(name);
        this.flavor = flavor;
    }
}
class AppleFactory extends Factory{
    static create () {
        return new Apple('apple', 'tian');
    }
}

module.exports = AppleFactory;