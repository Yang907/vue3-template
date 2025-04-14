import request from '@/service/index'

// 测试api
export const departTree = (data: object) => {
  return request({
    url: '/api/xxx',
    method: 'post',
    data
  })
}
