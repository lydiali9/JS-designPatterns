// 工厂一般是接口，规定子类必须实现的方法
// 依赖抽象而不依赖实现
// 接口只有方法定义，没有方法实现；如果一个类要实现该接口，就必须实现该接口中的方法
class Factory {
    create() { }
}

module.exports = Factory;