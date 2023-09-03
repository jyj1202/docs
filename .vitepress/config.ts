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
    link: '/guide-sidebar/base/index.html',
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
      { text: 'vue3', link: '/front-end/vue3-sidebar' },
      { text: 'react', link: '/front-end/react-sidebar' },
      { text: 'nodejs', link: '/front-end/nodejs-sidebar' },
      { text: '小程序', link: '/front-end/mini-program-sidebar' },
      { text: '工程化', link: '/front-end/build-tools-sidebar/' },
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
      { text: '版本控制', link: '/dev-tools/version-control-sidebar/git/command'},
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
    ],
  }
]

// const sidebar =  {
//   '/guide/': [{
//     text: '本站介绍',
//     items: [{
//       text: '基本介绍',
//       items: [
//         { text: '网站说明', link: '/guide/base/' },
//         { text: '网站目录', link: '/guide/base/catalogue' },
//         { text: '关于我', link: '/guide/base/about-me' },
//       ],
//     }, {
//       text: '本站搭建介绍',
//       items: [
//         { text: '目录结构', link: '/guide/site-setup/structure' },
//         { text: 'vitepress',
//           items: [
//             { text: '问题合集', link: '/guide/site-setup/vitepress/questions' },
//             { text: 'nodejs脚本', link: '/guide/site-setup/vitepress/scripts' }
//           ]
//         },
//       ],
//     }]
//   }],
//   // front-end
//   '/front-end/css/': [{
//     text: 'css',
//     // link: '/front-end/build-tools/',
//     items: [
//       { text: 'sass', link: '/front-end/css/sass/' },
//     ],
//   }],
//   '/front-end/nodejs/': [{
//     text: 'Node.js',
//     // items: [
//     //   { text: '后台管理模板JAdmin',
//     //     items: [
//     //       { text: '项目介绍', link: '/front-end/my-project/j-admin/introduce' },
//     //       { text: '目录结构', link: '/front-end/my-project/j-admin/structure' },
//     //       { text: '项目设计及思路', link: '/front-end/my-project/j-admin/design' },
//     //     ],
//     //   },
//     //   { text: '表单设计器', link: '/front-end/my-project/j-formdesign/' },
//     // ]
//   }],
//   '/front-end/build-tools/': [{
//     text: '工程化',
//     link: '/front-end/build-tools/',
//     items: [
//       { text: 'vite', link: '/front-end/build-tools/vite/' },
//       { text: 'webpack', link: '/front-end/build-tools/webpack/' }
//     ],
//   }],
//   '/front-end/my-project/': [{
//     text: '个人项目',
//     items: [
//       {
//         text: '后台管理模板JAdmin',
//         collapsed: true,
//         items: [
//           { text: '项目介绍', link: '/front-end/my-project/j-admin/introduce' },
//           { text: '目录结构', link: '/front-end/my-project/j-admin/structure' },
//           { text: '项目设计及思路', link: '/front-end/my-project/j-admin/design' },
//         ],
//       },
//       { text: '表单设计器', link: '/front-end/my-project/j-formdesign/' },
//     ]
//   }],
//   // dev-tools
//   '/dev-tools/version-control': [{
//     text: '版本控制',
//     items: [
//       { text: 'git',
//         items: [
//           { text: '常用命令', link: '/dev-tools/version-control/git/command' },
//           { text: '问题合集', link: '/dev-tools/version-control/git/questions' },
//         ],
//       },
//       { text: 'github',
//         items: [
//           // { text: '常用命令', link: '/dev-tools/version-control/git/command' },
//         ],
//       },
//     ]
//   }],
//   '/essay': [{
//     text: '随笔',
//     link: '/essay/',
//     items: [
//       { text: '2023-08-31', link: '/essay/2023-08-31' },
//     ]
//   }],
// }

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  // lang: 'en-US',
  title: 'JYJ\'s Blog',
  description: '介英杰的技术博客',
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: '/docs/',

  // config source directory
  srcDir: 'src',

  themeConfig: {
    siteTitle: 'JYJ的博客',
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
