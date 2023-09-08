- [var()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)
var() CSS 函数可以插入一个自定义属性（有时也被称为“CSS 变量”）的值，用来代替非自定义属性中值的任何部分。
```css
:root {
  --backup-bg-color: teal;
}

body {
  /* main-bg-color 没有被设置，将使用回退值 backup-bg-color。如果 backup-bg-color 没有被设置，将使用回退值 white。 */
  color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

- url() 函数
```<url> ```
CSS 数据类型 ```<url>``` 指向一个资源。它没有独有的表达形式，只能通过 url() 函数定义。


