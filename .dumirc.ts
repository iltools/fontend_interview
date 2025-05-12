import { defineConfig } from 'dumi';
import path from 'path';

const getStatic = () => {
  console.log(process.env.NODE_ENV, '当前环境')
  return process.env.NODE_ENV === 'production' ? 'https://iltools.github.io/frontend_interview/' : '/'
}
export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  base: getStatic(),
  publicPath: getStatic(),
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
    socialLinks: {
      github: 'https://github.com/iltools/frontend_interview'
    }
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
