class Agent {
    constructor() {
        this._events = {};
    }
    // on addEventListener
    subscribe(type, listener) {
        let listeners = this._events[type];
        if (listeners) {
            listeners.push(listener);
        } else {
            this._events[type] = [listener];
        }
    }
    // emit
    publish(type) {
        let listeners = this._events[type];
        let args = Array.prototype.slice.call(arguments, 1);
        if (listeners) {
            listeners.forEach(listener => listener(...args));
        }
    } 
}

class LandLord {
    constructor(name) {
        this.name = name;
    }
    // 向外出租
    lend(agent, area, money) {
        debugger
        agent.publish('house', area, money);
    }
}

// 房客
class Tenant {
    constructor(name) {
        this.name = name;
    }
    // 租房
    rent(agent) {
        debugger
        agent.subscribe('house', (area, money) => {
            console.log(`${this.name}看到中介的新房源了 ${area}平米，房租${money}元`);
        })
    }
}
let agent = new Agent();
let tenant1 = new Tenant('lynnli1');
let tenant2 = new Tenant('lynnli2');
tenant1.rent(agent);
tenant2.rent(agent);

let landLord = new LandLord();
landLord.lend(agent, 100, 4000);
