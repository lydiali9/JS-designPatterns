// n! 1!+2!+3!+4!
// function multiple (n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * multiple(n - 1);
//     }
// }

// let sum = function(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += multiple(i);
//         console.log(result);
//     }

//     return result;
// }
// console.time('cost');
// console.log(sum(10000));
// console.timeEnd('cost'); // cost: 522.438ms

// 改进1，将阶乘的值缓存起来
let sum = (function() {
    let cache = {}; // 用来缓存每次的计算结果

    function multiple (n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * (cache[n - 1] || multiple(n - 1));
        }
    }

    return  function(n){
        let result = 0;
        for (let i = 1; i <= n; i++) {
            let ret = multiple(i);
            cache[i] = ret; // 从1开始每个阶乘都记录在了缓存中
            result += ret;
        }
        return result;
    }
})()
console.time('cost');
console.log(sum(10000)); 
console.timeEnd('cost');  // cost: 5.969ms