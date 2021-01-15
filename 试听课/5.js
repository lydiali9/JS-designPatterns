Function.prototype.before = function(beforeFn){
    let _this = this;
    return function(){
        beforeFn.apply(this,arguments);
        return _this.apply(this,arguments);
    }
}
Function.prototype.after = function(afterFn){
    let _this = this;
    return function(){
         _this.apply(this,arguments);
        afterFn.apply(this,arguments);
    }
}
function buy(money,goods){
  console.log(`花${money}买${goods}`);
}
buy = buy.before(function(){
    console.log(`向老妈申请100元.`);
});
buy = buy.after(function(){
    console.log(`把剩下的10毛钱还给媳妇.`);
});
buy(90,'买冰棍');