'use strict'
const orderRepository = require('../../../data/repository/orders.repository')
const { orderConverter } = require('../../converter/order.converter')

const execute = async (order) => {
  try {
    const orderData = await insertOrder(order)
    return orderConverter(orderData[0])
  } catch (error) {
    throw error
  }
}

const insertOrder = async (order) => {
  try {
    const result = await orderRepository.insertOrder(order)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
