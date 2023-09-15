- TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。

- 变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。
  ```typescript
  let x:any = 'hello';

  x(1) // 不报错
  x.foo = 100; // 不报错
  ```
  上面示例中，变量x的值是一个字符串，但是把它当作函数调用，或者当作对象读取任意属性，TypeScript 编译时都不报错。原因就是x的类型是any，TypeScript 不对其进行类型检查。

  由于这个原因，应该尽量避免使用any类型，否则就失去了使用 TypeScript 的意义。

  总之，TypeScript 认为，只要开发者使用了any类型，就表示开发者想要自己来处理这些代码，所以就不对any类型进行任何限制，怎么使用都可以。

  从集合论的角度看，any类型可以看成是所有其他类型的全集，包含了一切可能的类型。TypeScript 将这种类型称为“顶层类型”（top type），意为涵盖了所有下层。
  
- type

  别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
  ```typescript
  type Color = 'red';

  if (Math.random() < 0.5) {
    type Color = 'blue';
  }
  ```
  上面示例中，if代码块内部的类型别名Color，跟外部的Color是不一样的。

- typeof 是一个很重要的 TypeScript 运算符，有些场合不知道某个变量foo的类型，这时使用typeof foo就可以获得它的类型。

- never是 TypeScript 的唯一一个底层类型，所有其他类型都包括了never。从集合论的角度看，number|never等同于number。这也提示我们，函数的返回值无论是什么类型，都可能包含了抛出错误的情况。

- 对象可以同时有多种类型的属性名索引，比如同时有数值索引和字符串索引。但是，数值索引不能与字符串索引发生冲突，必须服从后者，这是因为在 JavaScript 语言内部，所有的数值属性名都会自动转为字符串属性名。
  ```typescript
  type MyType = {
    [x: number]: boolean; // 报错
    [x: string]: string;
  }
  ```
  上面示例中，类型MyType同时有两种属性名索引，但是数值索引与字符串索引冲突了，所以报错了。由于字符属性名的值类型是string，数值属性名的值类型只有同样为string，才不会报错。

- 属性的索引类型写法，建议谨慎使用，因为属性名的声明太宽泛，约束太少。另外，属性名的数值索引不宜用来声明数组，因为采用这种方式声明数组，就不能使用各种数组方法以及length属性，因为类型里面没有定义这些东西。
  ```typescript
  type MyArr = {
    [n:number]: number;
  };

  const arr: MyArr = [1, 2, 3];
  arr.length // 报错
  ```
  上面示例中，读取arr.length属性会报错，因为类型MyArr没有这个属性。

- 严格字面量检查
如果对象使用字面量表示，会触发 TypeScript 的严格字面量检查（strict object literal checking）。如果字面量的结构跟类型定义的不一样（比如多出了未定义的属性），就会报错。
  ```typescript
  const point:{
    x:number;
    y:number;
  } = {
    x: 1,
    y: 1,
    z: 1 // 报错
  };
  ```
  上面示例中，等号右边是一个对象的字面量，这时会触发严格字面量检查。只要有类型声明中不存在的属性（本例是z），就会导致报错。

  如果等号右边不是字面量，而是一个变量，根据结构类型原则，是不会报错的。
  ```typescript
  const myPoint = {
    x: 1,
    y: 1,
    z: 1
  };

  const point:{
    x:number;
    y:number;
  } = myPoint; // 正确
  ```
  上面示例中，等号右边是一个变量，就不会触发严格字面量检查，从而不报错。

  TypeScript 对字面量进行严格检查的目的，主要是防止拼写错误。一般来说，字面量大多数来自手写，容易出现拼写错误，或者误用 API。
  ```typescript
  type Options = {
    title:string;
    darkMode?:boolean;
  };

  const obj:Options = {
    title: '我的网页',
    darkmode: true, // 报错
  };
  ```
  上面示例中，属性darkMode拼写错了，成了darkmode。如果没有严格字面量规则，就不会报错，因为darkMode是可选属性，根据结构类型原则，任何对象只要有title属性，都认为符合Options类型。

  规避严格字面量检查，可以使用中间变量。
  ```typescript
  let myOptions = {
    title: '我的网页',
    darkmode: true,
  };

  const obj:Options = myOptions;
  ```
  上面示例中，创建了一个中间变量myOptions，就不会触发严格字面量规则，因为这时变量obj的赋值，不属于直接字面量赋值。

  如果你确认字面量没有错误，也可以使用类型断言规避严格字面量检查。
  ```typescript
  const obj:Options = {
    title: '我的网页',
    darkmode: true,
  } as Options;
  ```
  上面示例使用类型断言as Options，告诉编译器，字面量符合 Options 类型，就能规避这条规则。

- 空对象 # 
  空对象是 TypeScript 的一种特殊值，也是一种特殊类型。
  ```typescript
  const obj = {};
  obj.prop = 123; // 报错
  上面示例中，变量obj的值是一个空对象，然后对obj.prop赋值就会报错。

  原因是这时 TypeScript 会推断变量obj的类型为空对象，实际执行的是下面的代码。
  ```typescript
  const obj:{} = {};
  空对象没有自定义属性，所以对自定义属性赋值就会报错。空对象只能使用继承的属性，即继承自原型对象Object.prototype的属性。
  ```typescript
  obj.toString() // 正确
  上面示例中，toString()方法是一个继承自原型对象的方法，TypeScript 允许在空对象上使用。

  回到本节开始的例子，这种写法其实在 JavaScript 很常见：先声明一个空对象，然后向空对象添加属性。但是，TypeScript 不允许动态添加属性，所以对象不能分步生成，必须生成时一次性声明所有属性。
  ```typescript
  // 错误
  const pt = {};
  pt.x = 3;
  pt.y = 4;

  // 正确
  const pt = {
    x: 3,
    y: 4
  };
  ```
  如果确实需要分步声明，一个比较好的方法是，使用扩展运算符（...）合成一个新对象。
  ```typescript
  const pt0 = {};
  const pt1 = { x: 3 };
  const pt2 = { y: 4 };

  const pt = {
    ...pt0, ...pt1, ...pt2
  };
  ```
  上面示例中，对象pt是三个部分合成的，这样既可以分步声明，也符合 TypeScript 静态声明的要求。

  空对象作为类型，其实是Object类型的简写形式。
  ```typescript
  let d:{};
  // 等同于
  // let d:Object;

  d = {};
  d = { x: 1 };
  d = 'hello';
  d = 2;
  ```
  上面示例中，各种类型的值（除了null和undefined）都可以赋值给空对象类型，跟Object类型的行为是一样的。

  因为Object可以接受各种类型的值，而空对象是Object类型的简写，所以它不会有严格字面量检查，赋值时总是允许多余的属性，只是不能读取这些属性。
  ```typescript
  interface Empty { }
  const b:Empty = {myProp: 1, anotherProp: 2}; // 正确
  b.myProp // 报错
  ```
  上面示例中，变量b的类型是空对象，视同Object类型，不会有严格字面量检查，但是读取多余的属性会报错。

  如果想强制使用没有任何属性的对象，可以采用下面的写法。
  ```typescript
  interface WithoutProperties {
    [key: string]: never;
  }

  // 报错
  const a:WithoutProperties = { prop: 1 };
  ```
  上面的示例中，[key: string]: never表示字符串属性名是不存在的，因此其他对象进行赋值时就会报错。

- 如果子接口与父接口存在同名属性，那么子接口的属性会覆盖父接口的属性。注意，子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错。
  ```typescript
  interface Foo {
    id: string;
  }

  interface Bar extends Foo {
    id: number; // 报错
  }
  ```
  上面示例中，Bar继承了Foo，但是两者的同名属性id的类型不兼容，导致报错。

- 如果有复杂的类型运算，那么没有其他选择只能使用type；一般情况下，interface灵活性比较高，便于扩充类型或自动合并，建议优先使用。

- 构造方法不能声明返回值类型，否则报错，因为它总是返回实例对象。

- 由于类名作为类型使用，实际上代表一个对象，因此可以把类看作为对象类型起名。事实上，TypeScript 有三种方法可以为对象类型起名：type、interface 和 class。

- JavaScript 语言中，类只是构造函数的一种语法糖，本质上是构造函数的另一种写法。所以，类的自身类型可以写成构造函数的形式。
  ```typescript
  function createPoint(
    PointClass: new (x:number, y:number) => Point,
    x: number,
    y: number
  ):Point {
    return new PointClass(x, y);
  }
  ```
  上面示例中，参数PointClass的类型写成了一个构造函数，这时就可以把Point类传入。

  构造函数也可以写成对象形式，所以参数PointClass的类型还有另一种写法。
  ```typescript
  function createPoint(
    PointClass: {
      new (x:number, y:number): Point
    },
    x: number,
    y: number
  ):Point {
    return new PointClass(x, y);
  }
  ```
  根据上面的写法，可以把构造函数提取出来，单独定义一个接口（interface），这样可以大大提高代码的通用性。
  ```typescript
  interface PointConstructor {
    new(x:number, y:number):Point;
  }

  function createPoint(
    PointClass: PointConstructor,
    x: number,
    y: number
  ):Point {
    return new PointClass(x, y);
  }
  ```
  总结一下，类的自身类型就是一个构造函数，可以单独定义一个接口来表示。

- Enum 结构比较适合的场景是，成员的值不重要，名字更重要，从而增加代码的可读性和可维护性。

- 由于as const会将数组变成只读元组，所以很适合用于函数的 rest 参数。
  ```typescript
  function add(x:number, y:number) {
    return x + y;
  }

  const nums = [1, 2];
  const total = add(...nums); // 报错
  上面示例中，变量nums的类型推断为number[]，导致使用扩展运算符...传入函数add()会报错，因为add()只能接受两个参数，而...nums并不能保证参数的个数。

  事实上，对于固定参数个数的函数，如果传入的参数包含扩展运算符，那么扩展运算符只能用于元组。只有当函数定义使用了 rest 参数，扩展运算符才能用于数组。

  解决方法就是使用as const断言，将数组变成元组。

  const nums = [1, 2] as const;
  const total = add(...nums); // 正确
  ```
  上面示例中，使用as const断言后，变量nums的类型会被推断为readonly [1, 2]，使用扩展运算符展开后，正好符合函数add()的参数类型。

- 非空断言只有在打开编译选项strictNullChecks时才有意义。如果不打开这个选项，编译器就不会检查某个变量是否可能为undefined或null。

- namespace 会变成一个值，保留在编译后的代码中。这一点要小心，它不是纯的类型代码。

  namespace 与模块的作用是一致的，都是把相关代码组织在一起，对外输出接口。区别是一个文件只能有一个模块，但可以有多个 namespace。由于模块可以取代 namespace，而且是 JavaScript 的标准语法，还不需要编译转换，所以建议总是使用模块，替代 namespace。
