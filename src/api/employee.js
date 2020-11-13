import request from '@/utils/request'

export function addEmployee(employee) {
  console.log(employee)
  return request({
    url: '/api/employee/addEmployee',
    method: 'post',
    params: employee
  })
}

export function fetchList(query) {
  console.log(query)
  return request({
    url: '/api/employee/getList',
    method: 'get',
    params: query
  })
}

export function updateEmployee(employee) {
  console.log(employee)
  return request({
    url: '/api/employee/update',
    method: 'post',
    params: employee
  })
}
