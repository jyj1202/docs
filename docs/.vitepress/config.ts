import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Common admin template',
  description: 'Vite & Vue powered static site generator.',

  // config source directory
  srcDir: './src',
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: '/base/',

  themeConfig: {
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
