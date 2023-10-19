# 项目介绍
## 介绍 📖
Geeker-Admin 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。项目提供强大的 ProTable 组件，在一定程度上提高您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、动态路由、按钮级别权限控制等功能。

由于项目内容较多，不详细展开介绍，只在[项目设计及思路](/front-end/my-project/j-admin/design)介绍一下整体设计和思路

## 在线预览 👀
- Link：https://admin.spicyboy.cn

## 代码仓库 ⭐
- Gitee：https://gitee.com/HalseySpicy/Geeker-Admin
- GitHub：https://github.com/HalseySpicy/Geeker-Admin

##项目文档 📚
- 项目更新日志：CHANGELOG.md
- 项目文档地址：https://docs.spicyboy.cn

## 项目功能 🔨
- 使用 Vue3.3 + TypeScript 开发，单文件组件＜ script setup ＞
- 采用 Vite4 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装（请求拦截、取消、常用请求封装…）
- 基于 Element 二次封装 ProTable 组件，表格页面全部为配置项 columns
- 支持 Element 组件大小切换、暗黑模式、i18n 国际化
- 使用 VueRouter 进行路由权限拦截、页面按钮权限配置、路由懒加载
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套页面缓存
- 常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按…）
- 使用 Prettier 统一格式化代码，集成 ESLint、Stylelint 代码校验规范
- 使用 husky、lint-staged、commitlint、czg、cz-git 规范提交信息

