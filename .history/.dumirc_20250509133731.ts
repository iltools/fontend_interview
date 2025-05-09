/*
 * @Author: iltools 15387673@qq.com
 * @Date: 2025-05-09 13:16:10
 * @LastEditors: iltools 15387673@qq.com
 * @LastEditTime: 2025-05-09 13:25:51
 * @FilePath: \frontend_interview\.dumirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
