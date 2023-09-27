## Sass基础

当谈到 Sass (Syntactically Awesome Style Sheets)中的 `@mixin`、`@include` 和 `@each` 等语法时，它们是用来增强样式表的功能，提供更灵活和可重用的代码。以下是对每个语法的简单解释和示例：

### 1. @mixin

`@mixin` 用于创建可以在其他选择器中重复使用的代码块。通过定义一个 `@mixin`，你可以将一组 CSS 规则封装起来，并在需要的地方使用 `@include` 引入。

#### 示例

```sass
@mixin button-style {
  padding: 10px 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
}

.button {
  @include button-style;
}

.submit-button {
  @include button-style;
  background-color: green;
}
```
在上面的示例中，我们使用 @mixin 创建了一个名为 button-style 的代码块，其中包含按钮的样式规则。然后，我们可以通过 @include 在 .button 和 .submit-button 类选择器中引入这个代码块，从而应用相同的样式。



## @include

`@include` 用于在选择器中引入一个 `@mixin` 定义的代码块。通过使用 `@include`，可以将 `@mixin` 中定义的样式应用到当前选择器中。

#### 示例

```scss
@mixin heading-style($color) {
  font-size: 24px;
  color: $color;
}

h1 {
  @include heading-style(red);
}

h2 {
  @include heading-style(blue);
}
```
在上面的示例中，我们定义了一个名为 heading-style 的 @mixin，它接受一个参数 $color。然后，我们可以使用 @include 在 h1 和 h2 中引入这个代码块，并传递不同的颜色参数。


## @each

`@each` 用于遍历列表或映射，并为每个元素执行代码块。

#### 示例

```scss
$colors: red, green, blue;

@each $color in $colors {
  .color-#{$color} {
    background-color: $color;
  }
}
```
在上面的示例中，我们创建了一个名为 $colors 的列表，其中包含三种颜色。然后，通过 @each 遍历这个列表，并为每个颜色生成相应的选择器，设置背景颜色。



- 结构何皮肤分离
  宽高、定位位置 和 颜色分离
  