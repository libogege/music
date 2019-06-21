import originJsonp from 'jsonp'

// 三个参数粉笔为 目标url 需要拼接在url上的参数 以及jsonp插件 需要的option
export default function jsonp(url, data, option) {
  // 在这里引入一个  拼接字符串的方法
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  // 在这里返回一个Promise对象
  return new Promise((resolve, reject) => {
    // 在这里的data 跟上面的paramdata是不一样的  一个是 json的返回对象  一个是你传入的参数
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    //  对参数对象里的每一项进行判断
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // 循环结束  url 拼接完毕 将其返回
  return url ? url.substring(1) : ''
}
