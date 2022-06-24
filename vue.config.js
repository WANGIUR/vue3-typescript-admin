const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/my-repo/' : '/',

  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:5000',
          pathRewrite: { '^/api': '' },
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          // 按需自动导入 element+ 相关函数
          ElementPlusResolver()
        ]
      }),
      Components({
        resolvers: [
          // 按需自动导入 element+ 组件
          ElementPlusResolver()
        ]
      })
    ]
  }
})
