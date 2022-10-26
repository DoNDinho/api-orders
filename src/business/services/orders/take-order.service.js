'use strict'
const orderRepository = require('../../../data/repository/orders.repository')
const { statusConverter } = require('../../converter/order-status.converter')

const execute = async (id) => {
  try {
    const status = await takeOrder(parseInt(id))
    return statusConverter(status[0])
  } catch (error) {
    throw error
  }
}

const takeOrder = async (id) => {
  try {
    const result = await orderRepository.takeOrder(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
