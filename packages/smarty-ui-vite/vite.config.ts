/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { presetUno, presetAttributify, presetIcons } from 'unocss'
// import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
// 引入重构后的unocss配置
import UnoCSS from './config/unocss'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', 
    },
  },
  plugins: [
    vue(), // VUE插件
    vueJsx({}), // JSX 插件

    UnoCSS(), // 这是重构后的unocss配置

    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    cssCodeSplit: true,   // 追加 css代码分割
    minify: "terser",
    sourcemap: true, // 输出单独的source文件
    reportCompressedSize: true, // 生成压缩大小报告
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }

})
