# webpack
## 初步使用
- 通过node_modules/.bin/webpack启动webpack打包

但是，每次执行都敲这么一长串有没有觉得不方便呢？
OK，我们可以在package.json的scripts中定义自己的执行脚本。
package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。
首先，会寻找本地的node_modules/.bin路径中对应的命令。
如果没有找到，会去全局的环境变量中寻找。

## loader
- 什么是loader

loader是webpack中一个非常核心的概念。
webpack用来做什么呢？
在我们之前的实例中，我们**主要是用webpack来处理我们写的js代码**，并且webpack会自动处理js之间相关的依赖。
但是，在开发中我们不仅仅有基本的js代码处理，我们也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件等等。这些文件在webpack中也可以使用模块化的方式使用。
对于webpack本身的能力来说，对于这些转化是不支持的（这一点有点类似于express）。
那怎么办呢？给webpack扩展对应的loader就可以啦。
loader使用过程：
步骤一：通过npm安装需要使用的loader
步骤二：在webpack.config.js中的modules关键字下进行配置
大部分loader我们都可以在webpack的官网中找到，并且学习对应的用法。

  - css loader  
    使用css loader，webpack将css转换成js，通过js向dom上添加样式。

## plugin
- plugin是什么？
plugin是插件的意思，通常是用于对某个现有的架构进行扩展。
webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等。

- loader和plugin区别
loader主要用于转换某些类型的模块，它是一个转换器。
plugin是插件，它是对webpack本身的扩展，是一个扩展器。
- plugin的使用过程：
步骤一：通过npm安装需要使用的plugins(某些webpack已经内置的插件不需要安装)
步骤二：在webpack.config.js中的plugins中配置插件。


