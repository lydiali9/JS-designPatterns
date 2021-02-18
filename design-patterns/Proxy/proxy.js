let girl = {
    name: 'lynnli',
    age: 28,
    height: 170
};

let person = new Proxy(girl, {
    get(target, key) {
        if (key == 'age') {
            return target.age - 2;
        } else if (key == 'height') {
            return target.height + 5;
        } else {
            return target[key];
        }
    },
    set(target, key, val) {
        if (key == 'boyfriend') {
            let boyfriend = val;
            if (boyfriend.age > 30) {
                throw new Error('no');
            } else if (boyfriend.salary  < 200000) {
                throw new Error('no');
            } else {
                target[key] = val;
            }
        }
    }
}) 

console.log(person.age);
console.log(person.name);
console.log(person.height);
person.boyfriend = {
    age: 40,
    salary: 20
}