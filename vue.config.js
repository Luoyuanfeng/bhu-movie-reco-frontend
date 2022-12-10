const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    proxy: {
      enabled: true,
      context: '/api',
      options: {
        target: 'http://82.156.34.76:17654',
        changeOrigin: true,
        ws: true,                                            //websocket
        pathRewrite: {
            '^/api': '/api'
        }
      }
    }
  }
})
