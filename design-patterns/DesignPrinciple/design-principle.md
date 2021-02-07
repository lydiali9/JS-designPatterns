### 设计原则

#### SOLID五大设计原则

| 首字母  | 指代 |  概念 |
| ------------- | ------------- | ------------- |
| S  | 单一职责原则  | 对象应该仅具有一种单一功能的概念 |
| O  | 开放封闭原则  | 软件体对于扩展开放，对于修改封闭 |
| L  | 里氏替换原则  | 程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换 |
| I  | 接口隔离原则  | 多个特定的客户端接口要好于一个宽泛用途的接口 |
| D  | 依赖反转原则  | 一个方法应该遵循“依赖于一个抽象而不是实例” |

#### 单一职责原则
* 一个程序只做一件事情
* 如果功能特别复杂就进行拆分

#### 开放封闭原则
* 对扩展开放，对修改封闭
* 增加需求时扩展新代码，而非修改已有代码
* 这是软件设计的终极目标

![markdown](./开放封闭原则.png "例子")

#### 里氏替换原则
* 子类能覆盖父类
* 父类能出现的地方子类就能出现
* JS使用比较少


```
// demo1
class Person3 {
    constructor() {}
    buy() {}
}

class Man extends Person3 {
    constructor(gender) {
        super();
        this.gender = gender;
    }

    buy() {
        console.log('buy ipad');
    }
}

class Women extends Person3 {
    constructor(gender, name) {
        super();
        this.gender = gender;
        this.name = name;
    }

    buy() {
        console.log('buy package');
    }
}

let person = new Person3();
let man = new Man('man');
let women = new Women('woman', 'lynn');
person.buy();
man.buy();
women.buy();

let jiang = {
    marry(w: Women) {
        console.log(`将和${w.name}去吃饭`);
    }
}

jiang.marry(new Women('women', 'rose'))
```

#### 接口隔离原则
* 保持接口的单一独立，避免出现胖接口
* JS中没有接口，使用较少
* 类似于单一职责原则，更关注接口

#### 依赖倒置原则
* 面向接口编程，依赖于抽象而不依赖于具体的实现
* 使用方只关注接口而不关注具体类的实现
* JS中使用较少（没有接口，弱类型）

