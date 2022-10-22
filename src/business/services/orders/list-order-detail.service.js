'use strict'
const orderRepository = require('../../../data/repository/orders.repository')
const { orderDetailConverter } = require('../../converter/order-detail.converter')

const execute = async () => {
  try {
    const orderDetailsData = await listDetailOrder()
    return orderDetailsData.map((orderDetail) => orderDetailConverter(orderDetail))
  } catch (error) {
    throw error
  }
}

const listDetailOrder = async () => {
  try {
    const result = await orderRepository.listDetailOrder()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
