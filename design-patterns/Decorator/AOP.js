/**
 * AOP就是在函数执行之前或者执行之后添加一些额外的逻辑，而不需要修改函数的功能
 */

 // 应用场景在提交表单时，可以调用before方法进行输入验证
 // 事件触发后的埋点事件可以放在after方法中进行触发

Object.prototype.before = function(beforeFn) {
    let _this = this;
    return function() {
        beforeFn.apply(this, arguments);
        _this.apply(this, arguments);
    }
}

Object.prototype.after = function(afterFn) {
    let _this = this;
    return function() {
        _this.apply(this, arguments);
        afterFn.apply(this, arguments);
    }
}

function buy(money, goods) {
    console.log(`花${money}元买${goods}`);
}

buy = buy.before(function() {
    console.log('向爸妈拿钱'); 
})
buy = buy.after(function() {
    console.log('向爸妈还钱'); 
})
buy(100, 'flower');

// 输出：
// 向爸妈拿钱
// 花100元买flower
// 向爸妈还钱