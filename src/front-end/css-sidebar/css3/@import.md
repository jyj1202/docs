# @规则
At 规则是一个 CSS 语句，用来指示 CSS 如何运行。以 at 符号开头，'@'（U+0040 COMMERCIAL AT），后跟一个标识符，并包括直到下一个分号的所有内容，';'（U+003B SEMICOLON），或下一个 CSS 块，以先到者为准。

- [@import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import)
```css
@import url;
@import url list-of-media-queries;
```
其中：  
url  
是一个表示要引入资源位置的 ```<string>``` 或者 ```<uri>``` 。这个 URL 可以是绝对路径或者相对路径。要注意的是这个 URL 不需要指明一个文件；可以只指明包名，然后合适的文件会被自动选择 (e.g. chrome://communicator/skin/). See here 了解更多。

list-of-media-queries  
是一个逗号分隔的 媒体查询 条件列表，决定通过 URL 引入的 CSS 规则 在什么条件下应用。如果浏览器不支持列表中的任何一条媒体查询条件，就不会引入 URL 指明的 CSS 文件。

- @charset
@charset "utf-8";

