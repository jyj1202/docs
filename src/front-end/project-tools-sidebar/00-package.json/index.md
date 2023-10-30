- 几个核心的package.json入口字段
  - main: 一般常用，node和浏览器都生效
  - module: esm规范入口，node无效
  - browser：浏览器环境下的入口
  - exports：node14.13后支持，可以覆盖前面的字段


- 浏览器环境
  - import：

    browser > module > main

- node环境
  - package.json入口文件字段只支持main，其他无效
  - 如果package.json没有指明main，那么默认找该文件夹下的index.js