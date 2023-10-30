# vite
## 基本介绍
- vite的开发服务器，使用esbuild预构建依赖，利用浏览器es模块化的能力，先启动服务器，按需进行开发时代码打包，同时拥有更快的HMR（因为Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活），所以vite相对于其他传统构建工具，可以更快速地启动一个前端开发服务。

- vite在打包项目时，使用rollup进行打包，

  [为何不用 ESBuild 打包？](https://cn.vitejs.dev/guide/why.html#why-not-bundle-with-esbuild)


## vite主要由两部分组成：
一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
