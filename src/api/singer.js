import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'
// import axios from 'axios'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    uin: 0,
    needNewCode: 0,
    channel: 'singer',
    page: 'list',
    key: 'all_all_all', // 查看所有歌手
    pagesize: 100, // 查多少数据
    pagenum: 1, // 查第几页数据
    g_tk: 1595941909,
    hostUin: 0
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    g_tk: 1595941909,
    singermid: singerId
  })

  return jsonp(url, data, options)
}

export function getSongVkey (songmid) { // 获取歌曲的vkey
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  const data = Object.assign({}, {
    callback: 'musicJsonCallback',
    loginUin: 3051522991,
    format: 'jsonp',
    platform: 'yqq',
    needNewCode: 0,
    cid: 205361747,
    uin: 3051522991,
    guid: 5931742855,
    songmid: songmid,
    filename: `C400${songmid}.m4a`
  })

  return jsonp(url, data)
}

// export function getSongVkey(songmid) {
//   const url = '/api/music'
//   const data = Object.assign({}, commonParams, {
//     songmid: songmid,
//     filename: `C400${songmid}.m4a`,
//     guid: 6319873028, // 会变，以实时抓取的数据为准
//     platform: 'yqq',
//     loginUin: 0,
//     hostUin: 0,
//     needNewCode: 0,
//     cid: 205361747,
//     uin: 0,
//     format: 'json'
//   })
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }