import request from '@/utils/request'

export function addBrand(brand) {
  return request({
    url: '/api/store/addBrand',
    method: 'get',
    params: { brand }
  })
}

export function delBrand(brandId) {
  return request({
    url: '/api/store/delBrand',
    method: 'get',
    params: { brandId }
  })
}

export function addSeries(brandId, seriesName) {
  return request({
    url: '/api/store/addSeries',
    method: 'get',
    params: { brandId, seriesName }
  })
}

export function delSeries(seriesId) {
  return request({
    url: '/api/store/delSeries',
    method: 'get',
    params: { seriesId }
  })
}

export function addStore(car) {
  // console.log(car)
  return request({
    url: '/api/store/addStore',
    method: 'post',
    params: car
  })
}

export function fetchList(query) {
  // console.log(query)
  return request({
    url: '/api/store/getList',
    method: 'get',
    params: query
  })
}

export function updateStore(car) {
  console.log(car)
  return request({
    url: '/api/store/update',
    method: 'post',
    params: car
  })
}
