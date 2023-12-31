## 操作符
## 逗号操作符 ","

- 逗号操作符是 JavaScript 中的一种运算符，用逗号 `,` 分隔开多个表达式，返回最后一个表达式的值。

  逗号操作符的用法不太常见，因为它的作用比较有限。通常情况下，我们会使用分号 `;` 来分隔每个语句，而不是使用逗号 `,`。逗号操作符的主要用途是在 for 循环中同时执行多个语句，或者将多个表达式放在一行中来简化代码。

  例如，以下代码使用逗号操作符在一个 for 循环中同时定义了两个变量：

  ```javascript
  for (var i = 0, j = 10; i < j; i++, j--) {
    console.log(i + j);
  }
  ```

  在上述代码中，逗号操作符用于在循环初始化语句和循环迭代语句中同时执行多个表达式，以便在一个循环中同时迭代两个变量。每次循环时，变量 `i` 递增，变量 `j` 递减，直到 `i` 大于等于 `j`。

  逗号操作符还可以用于将多个表达式放在一行中，从而使代码更加简洁。例如，以下代码使用逗号操作符在一个语句中同时定义了两个变量，并将它们初始化为相同的值：

  ```javascript
  var a = 1, b = 1, c = 1;
  ```

  需要注意的是，逗号操作符在一些情况下容易被误用。例如，在条件语句中使用逗号操作符，可能会导致判断结果出现错误。因此，在编写代码时，应该谨慎使用逗号操作符，以避免出现不必要的错误。

- ['name', 'power'].reduce((o, key) => ((o[key] = 1), o), {})   这行js代码中的”((o[key] = 1), o)“是什么意思，返回什么？

  在这行 JavaScript 代码中，`(o[key] = 1)` 表示给对象 `o` 添加一个键为 `key`，值为 `1` 的属性。紧接着的 `,` 逗号操作符返回了整个对象 `o`。最后，`reduce()` 方法返回了被迭代后的对象。

  可以将这行代码拆分开来理解，首先定义了一个空对象 `{}`：

  ```javascript
  {}
  ```

  接着调用数组的 `reduce()` 方法，传入一个回调函数和初始值 `{}`：

  ```javascript
  ['name', 'power'].reduce((o, key) => ((o[key] = 1), o), {})
  ```

  回调函数的第一个参数 `o` 是初始值 `{}`，而第二个参数 `key` 则是当前迭代到的数组元素。

  在每次迭代中，回调函数将执行逗号操作符表达式中的两个操作：

  1. 将 `1` 赋值给对象 `o` 的 `key` 属性上，即 `o[key] = 1`。
  2. 返回对象 `o`，即 `, o`。

  由于逗号操作符的优先级比赋值操作符低，所以要使用圆括号将赋值操作符括起来，以确保它首先被执行。

  最终，`reduce()` 方法返回的对象会包含两个属性 `name` 和 `power`，它们的初始值都为 `1`。因此，这行代码的输出结果是：

  ```
  { name: 1, power: 1 }
  ```

