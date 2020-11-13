import request from '@/utils/request'

export function fetchSeries() {
  return request({
    url: '/api/init/seriesOpt',
    method: 'get'
  })
}

export function fetchBrand() {
  return request({
    url: '/api/init/brandOpt',
    method: 'get'
  })
}

export function fetchStore(seriesId) {
  return request({
    url: '/api/init/storeOpt',
    method: 'get',
    params: { seriesId }
  })
}

export function fetchCustomer(idCard) {
  return request({
    url: '/api/init/getCustomer',
    method: 'get',
    params: { idCard }
  })
}
