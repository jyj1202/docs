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
    text: '介绍',
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
      { text: 'nodejs', link: '/front-end/nodejs' },
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
    text: '开发工具',
    activeMatch: '^/dev-tools/',
    items: [
      { text: '版本控制', link: '/dev-tools/version-control/git/command'}
    ]
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
  '/guide/': [{
    text: '基本介绍',
    items: [
      { text: '网站说明', link: '/guide/' },
      { text: '网站目录', link: '/guide/catalogue' },
      { text: '关于我', link: '/guide/about-me' },
    ],
  }, {
    text: '本站搭建介绍',
    items: [
      { text: '目录结构', link: '/guide/site-setup/structure' },
      { text: 'vitepress',
        items: [
          { text: '问题合集', link: '/guide/site-setup/vitepress/questions' },
          { text: 'nodejs脚本', link: '/guide/site-setup/vitepress/scripts' }
        ]
      },
    ],
  }],
  // front-end
  '/front-end/css/': [{
    text: 'css',
    // link: '/front-end/build-tools/',
    items: [
      { text: 'sass', link: '/front-end/css/sass/' },
    ],
  }],
  '/front-end/nodejs/': [{
    text: 'Node.js',
    // items: [
    //   { text: '后台管理模板JAdmin',
    //     items: [
    //       { text: '项目介绍', link: '/front-end/my-project/j-admin/introduce' },
    //       { text: '目录结构', link: '/front-end/my-project/j-admin/structure' },
    //       { text: '项目设计及思路', link: '/front-end/my-project/j-admin/design' },
    //     ],
    //   },
    //   { text: '表单设计器', link: '/front-end/my-project/j-formdesign/' },
    // ]
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
  // dev-tools
  '/dev-tools/version-control': [{
    text: '版本控制',
    items: [
      { text: 'git',
        items: [
          { text: '常用命令', link: '/dev-tools/version-control/git/command' },
          { text: '问题合集', link: '/dev-tools/version-control/git/questions' },
        ],
      },
      { text: 'github',
        items: [
          // { text: '常用命令', link: '/dev-tools/version-control/git/command' },
        ],
      },
    ]
  }],
  '/essay': [{
    text: '随笔',
    link: '/essay/',
    items: [
      { text: '2023-08-31', link: '/essay/2023-08-31' },
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
