# loader
- loader本质是一个方法，该方法接受到要处理的资源的内容，并进一步处理，最后返回处理接结果。

- 简单实现
```js
// 编写loader需要返回处理后的内容
module.exports = function (cssContent) {
  cssContent = cssContent.replace('0', '0px')
  return cssContent
}
```
