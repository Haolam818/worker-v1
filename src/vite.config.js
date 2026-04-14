import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // 设置根目录
  build: {
    outDir: 'dist', // 告诉 Vercel 编译后的东西放在这里
  }
})
