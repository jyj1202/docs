## js中string.slice和string.substring区别
在JavaScript中，`slice()`和`substring()`都是用来从字符串中提取子字符串的方法。它们的区别在于参数的处理方式。

`slice()`方法可以接受两个参数，第一个参数表示开始提取的位置，第二个参数表示结束提取的位置（不包含该位置的字符）。如果省略第二个参数，则默认提取到字符串末尾。如果参数为负数，表示从字符串末尾开始计算位置。例如：

```
let str = "hello world";
console.log(str.slice(0, 5)); // "hello"
console.log(str.slice(-5)); // "world"
```

`substring()`方法也可以接受两个参数，但是第二个参数表示的是提取的字符数，而不是结束位置。如果省略第二个参数，则默认提取到字符串末尾。如果参数为负数或者第一个参数大于第二个参数，则会自动调换两个参数的位置。例如：

```
let str = "hello world";
console.log(str.substring(0, 5)); // "hello"
console.log(str.substring(6)); // "world"
```

因此，`slice()`和`substring()`的主要区别在于对于负数参数的处理方式不同，以及第二个参数的含义不同。一般来说，如果只需要提取一段子字符串，两种方法都可以使用，但是如果需要处理负数参数，建议使用`slice()`方法。
