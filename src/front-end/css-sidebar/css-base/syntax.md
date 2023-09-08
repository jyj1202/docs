# [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Syntax)
层叠样式表（Cascading Stylesheet，简称 CSS），其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。CSS 的语法反映了这个目标，由下面两个部分构建：

- 属性（property）是一个标识符，用可读的名称来表示其特性。
- 值（value）则描述了浏览器引擎如何处理该特性。每个属性都包含一个有效值的集合，它有正式的语法和语义定义，被浏览器引擎实现。

##CSS 声明
CSS 的核心功能是将 CSS 属性设定为特定的值。一个属性与值的键值对被称为“声明”（declaration） 。CSS 引擎会计算页面上每个元素都有哪些声明，并且会根据结果绘制元素，排布样式。

### CSS 声明块
声明会按照块的形式被组合。声明块（declaration block）以英文左大括号 ('{' U+007B LEFT CURLY BRACKET) 开始，以英文右大括号 '}' (U+007D RIGHT CURLY BRACKET) 结束。块有时会嵌套，所以开始与结束大括号必须要匹配。

css syntax - block.png
声明块里面的声明之间使用英文分号（';' U+003B SEMICOLON）隔开。声明块可能为空，也就是包含空的声明。声明之间的空格会被忽略，声明块里最后一个声明可以不用分号，不过建议加上，以方便扩展声明块。

css syntax - declarations block.png
备注： 声明块的内容—开始与结束大括号之间的声明，可以放在 HTML style 特性里。

CSS 规则
如果样式表只能为每个页面元素添加一个声明，那就没有真正发挥出它的价值。其真正的目标是为文档不同部分添加不同的声明。

为此，CSS 可以在声明块前面放置选择器（selector)，选择器用来选择页面多个元素的条件。一对选择器与声明块称为规则集（ruleset)，常简称为规则（rule)。
