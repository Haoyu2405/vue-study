// vue脚手架项目 - 默认的配置文件名
// webpack+node环境 - 导出配置对象
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // hot: true,
    host: 'localhost',
    port: 3000,
    open: true // 浏览器自动打开
  },
  lintOnSave:false, // 关闭eslint代码检查工具
})
