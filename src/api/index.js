import axios from './http'


/**
 * 通用的GET请求接口
 * @param url
 * @param param
 * @returns {*} 
 */
export const get = (url, param) => {
  console.log(url,param);
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        params: param
      }).then(res => {
        resolve(res.data)
      }).catch((err) => {
        if (err.response) {
          reject(err.response.status)
        } else {
          reject(err)
        }
      })
    })
  }

  /**
   * 通用的POST请求接口
   * @param url
   * @param param
   * @returns {*}
   */
  export const post = (url, param, config) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: param,
        config
      }).then(res => {
        resolve(res.data)
      }).catch((err) => {
        if (err.response) {
          reject(err.response.status)
        } else {
          reject(err)
        }
      })
    })
  }
  
  /**
   * 通用的以x-www-form-urlencoded方式发送POST请求
   * @param url
   * @param params
   * @returns {*}
   */
  export const formPost = (url, params) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        params: params,
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err, 'formPost err')
        if (err.response) {
          reject(err.response.status)
        } else {
          reject(err)
        }
      })
    })
  }