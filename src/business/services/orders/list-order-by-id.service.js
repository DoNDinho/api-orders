'use strict'
const orderRepository = require('../../../data/repository/orders.repository')
const { orderConverter } = require('../../converter/order.converter')
const { orderDetailConverter } = require('../../converter/order-detail.converter')

const execute = async (id) => {
  try {
    const orderData = await listOrderById(parseInt(id))
    const detailsData = createOrderDetail(orderData)
    return orderConverter(orderData[0], detailsData)
  } catch (error) {
    throw error
  }
}

const listOrderById = async (id) => {
  try {
    const result = await orderRepository.listOrderById(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

const createOrderDetail = (orderData) => {
  if (!orderData[0].NOMBRE_MENU) {
    return null
  }
  return orderData.map((order) => orderDetailConverter(order))
}

module.exports = { execute }
