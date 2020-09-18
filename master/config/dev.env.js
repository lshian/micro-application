'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://admin.yihpc.com/api/"', // api地址
  
  PRODUCT_ROOT: '"//localhost:8001"', // 产品项目地址
  ORDER_ROOT: '"//localhost:8002"', // 订单项目地址
})
