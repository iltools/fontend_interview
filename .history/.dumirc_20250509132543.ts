import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iltools-frontend-interview',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/foo' },
    ]
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
