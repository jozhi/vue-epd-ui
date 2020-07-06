import axios from 'axios'
// import qs from 'qs' // 序列化请求数据，视服务端的要求
import { Message } from 'element-ui'

// 添加的属性
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*'
axios.defaults.withCredentials = true
axios.defaults.timeout = 30000

export default function Axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create()

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        // if (config.method.toLocaleLowerCase() === 'post') {
        //   // config.data = qs.stringify(config.data)
        // }
        return config
      },
      error => {
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data
        if (response.data === undefined) {
          if (typeof response.request.responseText === 'string') {
            data = JSON.parse(response.request.responseText)
          } else {
            data = response.request.responseText
          }
        } else {
          if (typeof response.data === 'string') {
            data = JSON.parse(response.data)
          } else {
            data = response.data
          }
        }
        return {
          statusText: response.request.statusText,
          status: response.request.status,
          data: data
        }
      },
      err => {
        // if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
        //   console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
        // }
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              Message.error('请求错误 (code 400)')
              err.message = '请求错误 (code 400)'
              break
            case 401:
              Message.error('未授权，请登录 (code 401)')
              err.message = '未授权，请登录 (code 401)'
              break
            case 403:
              Message.error('拒绝访问 (code 403)')
              err.message = '拒绝访问 (code 403)'
              break
            case 404:
              Message.error(`请求地址出错: ${err.response.config.url} (code 404)`)
              err.message = `请求地址出错: ${err.response.config.url} (code 404)`
              break
            case 408:
              Message.error('请求超时 (code 408)')
              err.message = '请求超时 (code 408)'
              break
            case 500:
              Message.error('系统异常，请联系管理员。 (code 500)')
              err.message = '系统异常，请联系管理员。 (code 500)'
              break
            case 501:
              Message.error('系统异常，请联系管理员。 (code 501)')
              err.message = '系统异常，请联系管理员。 (code 501)'
              break
            case 502:
              Message.error('系统异常，请联系管理员。 (code 502)')
              err.message = '系统异常，请联系管理员。 (code 502)'
              break
            case 503:
              Message.error('服务不可用 (code 503)')
              err.message = '服务不可用 (code 503)'
              break
            case 504:
              Message.error('系统异常，请联系管理员。 (code 504)')
              err.message = '系统异常，请联系管理员。 (code 504)'
              break
            case 505:
              Message.error('HTTP版本不受支持 (code 505)')
              err.message = 'HTTP版本不受支持 (code 505)'
              break
            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    // 已保存结尾
    instance(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}
