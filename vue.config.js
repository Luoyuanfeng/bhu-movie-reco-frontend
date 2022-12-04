const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    proxy: {
      enabled: true,
      context: '/api',
      options: {
        target: 'http://127.0.0.1:17654',
        changeOrigin: true,
        ws: true,                                            //websocket
        pathRewrite: {
            '^/api': '/api'
        }
      }
    }
  }
})
