// let myImage = (function(){
//     let imgNode = document.createElement("img");
//     document.body.appendChild(imgNode);
//     let img = new Image();
//     img.onload = function(){
//         imgNode.src = this.src
//     }
//     return {
//         setSrc:function(src){
//             imgNode.src = "loading.jpg";
//             img.src = src;
//         }
//     }
// })();
// myImage.setSrc("a.jpg");

let imgFunc = (function () {
    let imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})()

let proxyImage = (function(){
    let img = new Image();
    img.onload = function(){
        imgFunc.setSrc(this.src);
    }
    return {
        setSrc:function(src){
            imgFunc.setSrc('./loading.jpg');
            img.src = src;     
        }
    }
})();
proxyImage.setSrc("./a.jpg");

let num = 0
let mFn = function(n){
    num++
    if(n<=1){
        return 1
    }else{
        return n*mFn(n-1);
    }
}
const proxy = function(fn){
    const cache = {};
    return function(num){
        if(num in cache){
            return cache[num]
        }else{
            return cache[num]= fn(num);
        }
    }
}
let proxyFn = proxy(mFn);
proxyFn(5);
proxyFn(5);
console.log(num);
