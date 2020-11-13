import request from '@/utils/request'

export function addCustomer(customer) {
  return request({
    url: '/api/customer/addCustomer',
    method: 'get',
    params: customer
  })
}

export function fetchList(query) {
  // console.log(query)
  return request({
    url: '/api/customer/getList',
    method: 'get',
    params: query
  })
}

export function updateCustomer(customer) {
  // console.log(customer)
  return request({
    url: '/api/customer/update',
    method: 'post',
    params: customer
  })
}
