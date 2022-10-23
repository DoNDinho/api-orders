'use strict'
const orderRepository = require('../../../data/repository/orders.repository')

const execute = async (id) => {
  try {
    await deliverOrder(parseInt(id))
  } catch (error) {
    throw error
  }
}

const deliverOrder = async (id) => {
  try {
    const result = await orderRepository.deliverOrder(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
