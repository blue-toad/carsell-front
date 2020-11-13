import request from '@/utils/request'

export function userSearch(name) {
  return request({
    url: '/api/search/user',
    method: 'get',
    params: { name }
  })
}
