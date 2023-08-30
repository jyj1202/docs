import { defineConfig } from 'vitepress';
const nav = [
  // {
  //   text: '本站搭建教学',
  //   activeMatch: '^/(guide|style-guide|cookbook|examples)/',
  //   items: [
  //     { text: 'Guide', link: '/guide/introduction' },
  //     { text: 'Tutorial', link: '/tutorial/' },
  //     { text: 'Examples', link: '/examples/' },
  //     { text: 'Quick Start', link: '/guide/quick-start' },
  //     // { text: 'Style Guide', link: '/style-guide/' },
  //     { text: 'Glossary', link: '/glossary/' },
  //     {
  //       text: 'Vue 2 Docs',
  //       link: 'https://v2.vuejs.org'
  //     },
  //     {
  //       text: 'Migration from Vue 2',
  //       link: 'https://v3-migration.vuejs.org/'
  //     }
  //   ]
  // },
  {
    text: '本站搭建教学',
    link: '/site-setup/vitepress',
    activeMatch: '^/site-setup/'
  },
  {
    text: '说明',
    link: '/guide/',
    activeMatch: '^/guide/'
  },
  { 
    text: '前端',
    activeMatch: '^/front-end/',
    items: [
      { text: 'css', link: '/front-end/css/sass/' },
      { text: 'js', link: '/front-end/js/' },
      { text: 'ts', link: '/front-end/catalogue' },
      { text: 'vue2', link: '/front-end/catalogue' },
      { text: 'vue3', link: '/front-end/catalogue' },
      { text: 'react', link: '/front-end/catalogue' },
      { text: '小程序', link: '/front-end/catalogue' },
      { text: '工程化', link: '/front-end/build-tools/' },
      { text: '个人项目', link: '/front-end/my-project/j-admin/introduce'},
      { text: '问题合集', link: '/front-end/questions/'}
    ]
  },
  {
    text: '后端',
    link: '/back-end/',
    activeMatch: '^/back-end/'
  },
  {
    text: '数据库',
    link: '/database/mysql/',
    activeMatch: '^/database/'
  },
  {
    text: '计算机网络',
    link: '/network/',
    activeMatch: '^/network/'
  },
  {
    text: '操作系统',
    link: '/operating-system/linux/',
    activeMatch: '^/operating-system/'
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
    text: '随笔',
    link: '/essay/',
    activeMatch: '^/essay/'
  }
]

const sidebar =  {
  '/site-setup/': [{
    text: '本站搭建教学',
    items: [
      { text: '目录结构', link: '/site-setup/structure' },
      { text: 'vitepress', link: '/site-setup/vitepress' },
    ],
  }],
  '/guide/': [{
    text: '说明',
    items: [
      { text: '网站说明', link: '/guide/' },
      { text: '网站目录', link: '/guide/catalogue' },
      { text: '关于我', link: '/guide/about-me' },
    ],
  }],
  '/front-end/css/': [{
    text: 'css',
    // link: '/front-end/build-tools/',
    items: [
      { text: 'sass', link: '/front-end/css/sass/' },
    ],
  }],
  '/front-end/build-tools/': [{
    text: '工程化',
    link: '/front-end/build-tools/',
    items: [
      { text: 'vite', link: '/front-end/build-tools/vite/' },
      { text: 'webpack', link: '/front-end/build-tools/webpack/' }
    ],
  }],
  '/front-end/my-project/': [{
    text: '个人项目',
    items: [
      { text: '后台管理模板JAdmin',
        items: [
          { text: '项目介绍', link: '/front-end/my-project/j-admin/introduce' },
          { text: '目录结构', link: '/front-end/my-project/j-admin/structure' },
          { text: '项目设计及思路', link: '/front-end/my-project/j-admin/design' },
        ],
      },
      { text: '表单设计器', link: '/front-end/my-project/j-formdesign/' },
    ]
  }],
}

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  // lang: 'en-US',
  title: 'JYJ的博客',
  description: '一个前端',
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: '/docs/',

  // config source directory
  srcDir: 'src',

  themeConfig: {
    siteTitle: 'JYJ的博客',
    logo: '/logo.svg',
    nav,
    sidebar,
    search: {
      provider: 'local'
    }
    
  },
});
