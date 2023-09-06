# 使用webpack从0到1搭建一个vue项目
## 步骤
### 项目基础配置
- 初始化init
- 项目基础目录搭建
  ```
  ├─public
  └─src
  ```
- 安装webpack webpack cli
  这时候可以对js模块化代码进行打包
- 引入并配置loader
  - css、sass系列loader
  - url、file loader
  - vue loader
- 引入plugin
  - html
  - webpack-dev-server
  - source map

### 引入项目规范插件
  - eslint
  - prettier
    - 格式化代码 "format": "prettier --write src/"
  - styleLint
  - lint-staged
    在提交的代码的时候，可以通过 ESLint、Prettier 等工具来格式化代码。  
    但如果直接处理全部代码，首先是可能存在性能问题，其次是可能会修改掉别的同事的代码。  
    这时可以引入 lint-staged，它会对暂存区的文件进行lint，而不会对其他文件进行lint。
  - [commitlint](https://commitlint.js.org/#/guides-local-setup)
    
  - [install czg](https://cz-git.qbb.sh/zh/guide/introduction)
    用于命令行交互
  - husky git钩子配置
    a handy git hook helper available on npm.
  - 统一包管理工具

### 依赖安装（可选）
- 引入其他包
  - element-plus
  - tailwind css
  - sass
  - svg-icon
  - axios

### 目录组织
- api统一管理
- 路由管理
- store管理





## 多入口打包测试
- 多入口就会打包出多个输出文件，这相比于单入口会有一个问题：  
一些公用模块会被重复打包进某个入口。  
所以需要将这些公用模块单独打包，并利用webpack在对应的入口引入。

## 代码分割测试
- 异步引入
- 第三方包
- 公用模块