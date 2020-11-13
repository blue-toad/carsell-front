import request from '@/utils/request'

export function loginByUsername(employeeId, password) {
  return request({
    url: '/api/user/login',
    method: 'post',
    params: { employeeId, password }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'post',
    params: { token }
  })
}
