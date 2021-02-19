class Promise {
    constructor(fn) {
        this.callbacks = [];
        let resolve = (data) => {
            this.callbacks.forEach(callback => callback());
        }
        fn(resolve);
    }

    then(callback) {
        this.callbacks.push(callback);
    }
}

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('ok');
    }, 2000);
});
promise.then(() => console.log(1));
promise.then(() => console.log(2));