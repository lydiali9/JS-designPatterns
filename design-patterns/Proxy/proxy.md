# 代理模式

> 由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介作用
> 可以在使用者和目标对象之间加一个代理对象，通过代理可以实现控制

![代理模式类图](./images/代理模式类图.png "例子")
![代理模式举例](./images/代理模式举例.png "例子")


![代理](./images/代理.png)

## 场景

1. 代理缓存
> 缓存代理可以为开销大的计算结果提供暂时的缓存

2. proxy函数
![proxy函数](./images/proxy函数.png)
![proxy函数优化](./images/proxy函数优化.png)

3. Proxy
![Proxy](./images/Proxy.png)
![proxy VS Adapor && proxy VS decorator](./images/proxyVSadapor&&proxyVSdecorator.png)

4. 事件委托
![事件委托](./images/事件委托.png)

5. 图片懒加载
![图片懒加载](./images/图片懒加载.png)
