// 这是一个简单的工厂模式
var XMLHttpFactory = funcrion() {}; // 单例 

XMLHttpFactory.createXMLHttp = function() {
	var XMLHttp = null;

	if(window.XMLHttpRequest) {
		XMLHttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		XMLHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}

	return XMLHttp;
}

var ajaxHander = function() {
	var XMLHttp = XMLHttpFactory.createXMLHttp;
}

