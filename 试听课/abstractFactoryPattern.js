// 这是一个复杂的工厂模式（抽象的工厂模式）
var XMLHttpFactory = funcrion() {}; // 单例 

// 派生子类，如果调用这个方法会抛出1个错误，它不能被实例化，只能用来派生子类
XMLHttpFactory.prototype = {
    createFactory: function() {
        throw new Error('This is a abstract class');
    }
}

var XMLHandler = function() {
    XMLHttpFactory.call(this);
}

XMLHandler.prototype = new XMLHttpFactory();
XMLHandler.prototype.constructor = XMLHandler;

// 重新定义createFactory
XMLHandler.prototype.createFactory = function() {
    var XMLHttp = null;

    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    return XMLHttp;
}

var ajaxHander = function() {
    var XMLHttp = XMLHttpFactory.createFactory;
}