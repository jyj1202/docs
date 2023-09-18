## Props基础（注意点）

- Prop 名字格式​

  如果一个 prop 的名字很长，应使用 **camelCase** 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。

  对于组件名我们推荐使用 **PascalCase**，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。然而对于传递 props 来说，使用 camelCase 并没有太多优势，因此我们推荐更贴近 HTML 的书写风格。

- 使用一个对象绑定多个 prop​

  如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 **v-bind**，即只使用 v-bind 而非 :prop-name。例如，这里有一个 post 对象：

- **TIP**: defineProps() 宏中的参数不可以访问 ```<script setup>``` 中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。

- **一些补充细节：**

  所有 prop 默认都是可选的，除非声明了 required: true。

  除 Boolean 外的未传递的可选 prop 将会有一个默认值 undefined。

  Boolean 类型的未传递 prop 将被转换为 false。这可以通过为它设置 default 来更改——例如：设置为 default: undefined 将与非布尔类型的 prop 的行为保持一致。

  如果声明了 default 值，那么在 prop 的值被解析为 undefined 时，无论 prop 是未被传递还是显式指明的 undefined，都会改为 default 值。

- 如果使用了基于类型的 prop 声明 ，Vue 会尽最大努力在运行时按照 prop 的类型标注进行编译。举例来说，```defineProps<{ msg: string }>```会被编译为```{ msg: { type: String, required: true }}```。

- type 也可以是自定义的类或构造函数，Vue 将会通过 ```instanceof``` 来检查类型是否匹配。例如下面这个类：

  ```typescript
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }

  defineProps({
    author: Person
  })
  ```

- [Boolean 类型转换](https://cn.vuejs.org/guide/components/props.html#boolean-casting)

  当一个 prop 被声明为允许多种类型时，Boolean 的转换规则也将被应用。**然而，当同时允许 String 和 Boolean 时，有一种边缘情况——只有当 Boolean 出现在 String 之前时，Boolean 转换规则才适用。**


## TypeScript 与 Props

- “运行时声明”和 “基于类型的声明”

  基于类型的声明或者运行时声明可以择一使用，但是不能同时使用。

- 在 3.2 及以下版本中，defineProps() 的泛型类型参数仅限于类型文字或对本地接口的引用。

  这个限制在 3.3 中得到了解决。最新版本的 Vue 支持在类型参数位置引用导入和有限的复杂类型。但是，由于类型到运行时转换仍然基于 AST，一些需要实际类型分析的复杂类型，例如条件类型，还未支持。您可以使用条件类型来指定单个 prop 的类型，但不能用于整个 props 对象的类型。

- Props 解构默认值

  当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 withDefaults 编译器宏解决。

- 非 ```<script setup>``` 场景下

- 复杂的 prop 类型

  对于运行时声明，我们可以使用 PropType 工具类型：

  ```ts
  import type { PropType } from 'vue'

  const props = defineProps({
    book: Object as PropType<Book>
  })
  ```
  其工作方式与直接指定 props 选项基本相同。
  