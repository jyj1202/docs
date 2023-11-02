https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules
## 导出模块的功能
为了获得模块的功能要做的第一件事是把它们导出来。使用 export 语句来完成。

最简单的方法是把它（指上面的 export 语句）放到你想要导出的项前面，比如：

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```
你能够导出函数，var，let，const, 和等会会看到的类。export 要放在最外层；比如你不能够在函数内使用 export。

一个更方便的方法导出所有你想要导出的模块的方法是在模块文件的末尾使用一个 export 语句，语句是用花括号括起来的用逗号分割的列表。比如：


```js
export { name, draw, reportArea, reportPerimeter };
```

## 默认导出
```js
export default function(ctx) {
  ...
}

import { default as randomSquare } from "./modules/square.js";
```

## 重命名导出与导入
```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

## [合并模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules#%E5%90%88%E5%B9%B6%E6%A8%A1%E5%9D%97)
有时你会想要将模块聚合在一起。你可能有多个级别的依赖项，你希望简化事物，将多个子模块组合到一个父模块中。这可以使用父模块中以下表单的导出语法：

```js
export * from "x.js";
export { name } from "x.js";
```

>备注： 这实际上是导入后跟导出的简写，即“我导入模块 x.js，然后重新导出部分或全部导出”。

## 动态加载模块

