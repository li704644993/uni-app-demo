import { http } from '@/http/luch-request/index.js'

// 获取新的token
const getNewTokenServe = () => {
  return http.get('/api/jwttoken/create')
}

export {
  getNewTokenServe
}
