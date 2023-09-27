# 选择器

- :root

  - 这个 CSS [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)匹配文档树的根元素。对于 HTML 来说，`:root` 表示 [`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素，除了[优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)更高之外，与 `html` 选择器相同。

  ### [声明全局 CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root#%E5%A3%B0%E6%98%8E%E5%85%A8%E5%B1%80_css_%E5%8F%98%E9%87%8F)

  在声明全局 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)时 **:root** 会很有用：

  CSSCopy to Clipboard

  ```css
  :root {
    --main-color: hotpink;
    --pane-padding: 5px 42px;
  }
  ```

