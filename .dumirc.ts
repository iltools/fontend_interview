import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  alias: {
    '@articles': path.resolve(__dirname, 'articles'),
  },
  outputPath: 'docs-dist',
  themeConfig: {
    // logo右边title名称
    name: '面试宝典',
    // 设置logo
    // logo: '',
    // 显示字数
    showLineNum: true,
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
