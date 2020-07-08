// package文件中获取版本号
process.env.VUE_APP_Version = require('./package.json').version

const NowDate = new Date();
const NowTime = `${NowDate.getFullYear()}-${NowDate.getMonth() + 1}-${NowDate.getDate()}__${NowDate.getHours()}:${NowDate.getMinutes()}:${NowDate.getSeconds()}`

module.exports = {
  runtimeCompiler: true,  // 是否使用包含运行时编译器的 Vue 构建版本。
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',
    port: 8087,
    // open: true, //配置自动启动浏览器
    proxy: {
      '/proxyApi': {
        target: '//10.85.94.231:8080', // 对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/proxyApi': ''
        }
      }
    }
  },

  // webpack 打包时添加当前版本+时间后缀
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${NowTime}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${NowTime}.js`
    },
  },
}