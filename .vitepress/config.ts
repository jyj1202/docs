import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  // lang: 'en-US',
  title: 'JYJ的技术博客',
  description: '一个前端',
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: '/docs/',

  // config source directory
  srcDir: 'src',

  themeConfig: {
    logo: '/imgs/logo.svg',
    nav: [
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide/introduce' },
        ],
      },
    ],
  },
});
