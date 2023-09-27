- [关于解构 响应式语法糖](https://cn.vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform)
  [响应性语法糖曾经是一个实验性功能，且已被废弃。](https://github.com/vuejs/rfcs/discussions/369)
  在未来的一个小版本更新中，Core 支持将在 Vue3.4 及以上版本中被移除。

  The Rationale
  The original goal of Reactivity Transform was to improve the developer experience by providing more succinct syntax when working with reactive state. We shipped it as experimental to gather feedback from real world usage. Despite the proposed benefits, we discovered the following issues:

  Losing .value makes it harder to tell what is being tracked and which line is triggering a reactive effect. This problem is not so noticeable inside small SFCs, but the mental overhead becomes much more noticeable in large codebases, especially if the syntax is also used outside of SFCs.

  Because of (1), some users opted to only use Reactivity Transform inside SFCs, which creates inconsistency and cost of context-shifting between different mental models. So, the dilemma is that using it only inside SFCs leads to inconsistency, but using it outside SFCs hurts maintainability.

  Since there will still be external functions that expect to work with raw refs, the conversion between Reactive Variables and raw refs is inevitable. This ends up adding one more thing to learn and extra mental burden, and we noticed this confuses beginners more than plain Composition API.

  And most importantly, the potential risk of fragmentation. Despite this being clearly opt-in, some users have expressed strong objections against the proposal, the reason being that they fear that they would have to work with different codebases where some opted to use it while some not. This is a valid concern because Reactivity Transform entails a different mental model that distorts JavaScript semantics (variable assignments being able to trigger reactive effects).

  All things considered, we believe landing it as a stable feature would result in more issues than benefits, and thus not a good trade-off.

  出于上述原因，以及为了避免不必要的学习成本，推荐使用ref.value、prop.value

- [动态组件](https://cn.vuejs.org/api/sfc-script-setup.html#using-components)
  由于组件是通过变量引用而不是基于字符串组件名注册的，在 `<script setup>` 中要使用动态组件的时候，应该使用动态的 :is 来绑定：

    ```vue
    <script setup>
    import Foo from './Foo.vue'
    import Bar from './Bar.vue'
    </script>

    <template>
      <component :is="Foo" />
      <component :is="someCondition ? Foo : Bar" />
    </template>
    ```
  请注意组件是如何在三元表达式中被当做变量使用的。



- ### [`reactive()` 的局限性](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive)

  - **不能替换整个对象**：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：
  - **对解构操作不友好**：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：