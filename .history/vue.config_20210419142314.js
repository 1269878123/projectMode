// const vueEnv = process.env.VUE_APP_STRUCTURE
const path = require('path')
const { name } = require('./package')
// const env = process.env.VUE_APP_ENV
module.exports = {
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  productionSourceMap: false, // vueEnv === 'Beta' || process.env.NODE_ENV !== 'production',
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@view', path.resolve(__dirname, 'src/views'))
      .set('@lib', path.resolve(__dirname, 'src/lib'))
      .set('@conf', path.resolve(__dirname, 'src/utils/@conf'))
      .set('@static', path.resolve(__dirname, 'src/assets'))
      .set('@utils', path.resolve(__dirname, 'src/utils'))
      .set('@comp', path.resolve(__dirname, 'src/components'))
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
