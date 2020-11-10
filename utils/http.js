/**
 * 数据请求封装
 */
import _ from "@/plugins/lodash.js"
import Router from '@/router' // 使用路由跳转页面
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
        _.debounce(uni.hideLoading(), 500)
    }
}

const http = {
  get(params) {
      return this.request(params, 'GET')
  },
  post(params){
      return this.request(params, 'POST')
  },
  put(params) {
      return this.request(params, 'PUT')
  },
  delete(params) {
      return this.request(params, 'DELETE')
  },
  /**
   * 请求方法
   */
  request(params, method) {
    const {url, data = {}, showLoading=true, isDelay = false, header={}} = params
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