/**
 * 数据请求封装
 */
import { debounce } from './utils.js';
let loadingCount = 0;

function showLoading() {
  if(loadingCount===0) {
    uni.showLoading({
      mask: true,
      title: '加载中'
    })
  }
  loadingCount ++;
}
function hideLoading() {
  if(loadingCount <= 1) {
    debounce(() => {
      uni.hideLoading();
    }, 500)();
  }
}

const http = {
  get(url, data, showLoading, isDelay, header) {
    return this.request(url, data, showLoading, isDelay, header = {}, 'GET')
  },
  post(url, data, showLoading, isDelay, header) {
    return this.request(url, data, showLoading, isDelay, header = {}, 'POST')
  },
  put(url, data, showLoading, isDelay, header) {
    return this.request(url, data, showLoading, isDelay, header = {}, 'PUT')
  },
  delete(url, data, showLoading, isDelay, header) {
    return this.request(url, data, showLoading, isDelay, header = {}, 'DELETE')
  },
  /**
   * 请求方法
   */
  request(url, data = {}, showLoading=true, isDelay = false, header={}, method) {
    if(showLoading) {
      showLoading();
    }
    let headers = {
      "Content-Type": "application/json;charset=utf8"
    }
    headers = Object.assign(header, header, {
      "token": "token" // 这里获取本地的或者vuex的
    })
    
    return new Promise((resolve, reject) => {
      uni.request({
        url: getApp().globalData.API + url,
        data,
        method: method.toLowerCase(),
        success(res) {
          if(res.statusCode===200) {
            if (res.data.errno === 0) {
              resolve(res.data.data);
            } else {
              reject(res.data);
            }
          } else {
            reject(res.data);
          }
        },
        fail(e) {
          reject(e);
        },
        complete() {
          if(showLoading) {
            hideLoading();
          }
        }
      })
    })
  },
  // TODO: 封装单文件多文件上传下载,以及上传下载回调
}

export default http;