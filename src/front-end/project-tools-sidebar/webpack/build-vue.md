# 使用webpack从0到1搭建一个vue2项目
## 步骤
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


## 多入口测试
- 多入口就会打包出多个输出文件，这相比于单入口会有一个问题：  
一些公用模块会被重复打包进某个入口。  
所以需要将这些公用模块单独打包，并利用webpack在对应的入口引入。

## 代码分割测试
- 异步引入
- 第三方包
- 公用模块