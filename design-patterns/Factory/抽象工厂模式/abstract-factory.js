class Factory {
    createButton() { }
    createIcon() { }
}

class Icon { }
class AppleIcon {
    render () {
        console.log('绘制苹果图标');
    }
}
class WindowsIcon {
    render () {
        console.log('绘制windows图标');
    }
}
class Button { }
class AppleButton {
    render () {
        console.log('绘制苹果按钮');
    }
}
class WindowsButton {
    render () {
        console.log('绘制Windows按钮');
    }
}

class AppleFactory extends Factory {
    createButton() { 
        return new AppleButton();
    }
    createIcon() { 
        return new WindowsIcon();
    }
}

class WindowsFactory extends Factory {
    createButton() {
        return new WindowsButton();
    }
    createIcon() {
        return  new  WindowsIcon();
    }
}

/**
 * Java 是跨平台的
 * 1. 画一个图标
 * 2. 画一个按钮
 */

let windowsFactory = new WindowsFactory();
windowsFactory.createButton().render();
windowsFactory.createIcon().render();

let appleFactory = new AppleFactory();
appleFactory.createButton().render();
appleFactory.createIcon().render();

/**
 * 1. 简单工厂： 一般就是一个函数返回产品的实例
 * 2. 工厂方法： 多了工厂类，要想创建产品，需要先创建此工厂的实例，再通过此工厂来创建产品；
 * 3. 在抽象工厂中，一个工厂可以创建多种产品，
 */