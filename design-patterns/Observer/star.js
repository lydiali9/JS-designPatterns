class Star {
    constructor(name) {
        this.name = name;
        this.state = '';
        this.observers = []; // follower
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }

    // 增加一个新的观察者
    attach(observer) {
        this.observers.push(observer);
    }

    // 通知所有的观察者更新自己
    notifyAllObservers() {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.update())
        }
    }
}

class Fan {
    constructor(name, star) {
        this.name = name;
        this.star = star;
        this.star.attach(this);
    }

    update() {
        console.log(`my idol likes ${this.star.getState()}, I also like it!`);
    }
}

let star = new Star('aaa');
let fan = new Fan('bbb', star);
star.setState('assasadsad');