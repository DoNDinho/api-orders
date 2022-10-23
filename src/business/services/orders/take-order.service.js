'use strict'
const orderRepository = require('../../../data/repository/orders.repository')

const execute = async (id) => {
  try {
    await takeOrder(parseInt(id))
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
