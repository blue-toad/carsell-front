import request from '@/utils/request'

export function updateMessage(message) {
  return request({
    url: '/api/userChange/updateMessage',
    method: 'post',
    params: message
  })
}

export function validPassword(validPass) {
  return request({
    url: '/api/userChange/validPassword',
    method: 'post',
    params: { validPass }
  })
}

export function updatePassword(data) {
  return request({
    url: '/api/userChange/updatePassword',
    method: 'post',
    params: data
  })
}
