// class Subject{
//     constructor(){
//         this.observers = [];
//     }
//     add(observer){
//         this.observers.push(observer)
//     }
//     notify(...args){
//         this.observers.forEach(observer =>observer.update(...args));
//     }
// }
// class Observer{
//     update(...args){
//         console.log(...args);
//     }
// }
// let ob1 = new Observer();
// let ob2 = new Observer();
// let sub  = new Subject();
// sub.add(ob1);
// sub.add(ob2);
// sub.notify("天气预报");


class Event {  //事件通道
    constructor() {
        this.subscribers = {};//事件池
    }
    $on(name, fn) {
        (this.subscribers[name] || (this.subscribers[name] = [])).push(fn);
    }
    $emit(name, ...args) {
        let callbacks = this.subscribers[name] || [];
        callbacks.forEach(callbacks => callbacks(...args))
    }
    $off(name) {
        this.subscribers[name] = null;   
    }
}

let pubSub =  new Event();
pubSub.$on("天气预报",function(){
    console.log('北京天气预报');
})
pubSub.$on("天气预报",function(){
    console.log('湖北天气预报');
})
pubSub.$emit("天气预报","aaa");



