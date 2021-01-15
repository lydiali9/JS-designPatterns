// let singleton  = function(fn){
//     let result;
//     return function(){
//         return result || (result = fn.apply(this,arguments)); 
//     }
// }
// let createLayer = function(){
//     let oDiv = document.createElement('div');
//     oDiv.innerHTML = "我是弹框的内容";
//     oDiv.id = "layer";
//     oDiv.style.display = "none";
//     document.body.appendChild(oDiv);
//     return oDiv
// }

// let createSinglelayer = singleton(createLayer);
// document.getElementById('btn').onclick = function(){
//     let loginLayer = createSinglelayer();
//     loginLayer.style.display = "block";
// }


class Singleton{
    constructor(name){
        this.name = name;
    }
}
let getInstance = (function(){
    let instance = null;
    return function(name){
        if(!instance){
            instance = new Singleton(name);
        }
        return instance;
    }
})()
var a  = getInstance("aa");
var b = getInstance("bb");
console.log(a===b);
