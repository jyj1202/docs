import { defineConfig } from 'vitepress';
// import sidebar from "../scripts/autoGenerateSidebar";
import {readFile} from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sidebar = await readFile(path.join(__dirname, './sidebar.json'), 'utf-8')

const nav = [
  {
    text: '本站介绍',
    link: '/guide-sidebar/base/01-about-site.html',
    activeMatch: '^/guide/'
  },
  { 
    text: '前端',
    activeMatch: '^/front-end/',
    items: [
      { text: 'css', link: '/front-end/css-sidebar/sass/index.html' },
      { text: 'js', link: '/front-end/js-sidebar/core/index.html' },
      { text: 'ts', link: '/front-end/ts-sidebar/' },
      { text: 'vue2', link: '/front-end/vue2-sidebar' },
      { text: 'vue3', link: '/front-end/vue3-sidebar/props.html' },
      { text: 'react', link: '/front-end/react-sidebar' },
      { text: 'nodejs', link: '/front-end/nodejs-sidebar' },
      { text: '小程序', link: '/front-end/mini-program-sidebar' },
      { text: '工程化', link: '/front-end/project-tools-sidebar/' },
      { text: '个人项目', link: '/front-end/my-project-sidebar/j-admin/introduce.html'},
      { text: '问题合集', link: '/front-end/questions-sidebar/index.html'}
    ]
  },
  {
    text: '后端',
    activeMatch: '^/back-end/',
    items: [
      {text: 'java', link: '/back-end/java-sidebar/index.html'}
    ]
  },
  {
    text: '数据库',
    activeMatch: '^/database/',
    items: [
      {text: 'mysql', link: '/database/mysql/'}
    ]
  },
  {
    text: '开发工具',
    activeMatch: '^/dev-tools/',
    items: [
      { text: '版本控制', link: '/dev-tools/version-control-sidebar/git/base-command'},
      { text: 'github', link: '/dev-tools/version-control-sidebar/git/command'}
    ]
  },
  {
    text: '计算机网络',
    link: '/network/',
    activeMatch: '^/network/'
  },
  {
    text: '操作系统',
    activeMatch: '^/operating-system/',
    items: [
      { text: 'linux', link: '/operating-system/linux-sidebar/'},
    ],
  },
  // {
  //   text: '算法',
  //   link: '/front-end/',
  //   activeMatch: '^/front-end/'
  // },
  // {
  //   text: '设计模式',
  //   link: '/front-end/',
  //   activeMatch: '^/front-end/'
  // },
  {
    text: '代码风格、规范',
    link: '/code-style/',
    activeMatch: '^/code-style/'
  },
  {
    text: '其他',
    activeMatch: '^/other/',
    items: [
      { text: '随笔', link: '/other/essay-sidebar/index.html'},
      { text: '关于面试', link: '/other/about-interview-sidebar/index.html'},
    ],
  }
]

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  // lang: 'en-US',
  title: 'JYJ\'s Doc',
  description: '介英杰的文档',
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: '/docs/',

  // config source directory
  srcDir: 'src',

  ignoreDeadLinks: true,

  themeConfig: {
    siteTitle: 'JYJ的文档',
    logo: '/logo.svg',
    nav,
    sidebar: JSON.parse(sidebar),
    search: {
      provider: 'local'
    }
    
  },
  // vite: {
  //   plugins: [
  //     sidebar({ docsPath: '../src' })
  //   ]
  // }
});
