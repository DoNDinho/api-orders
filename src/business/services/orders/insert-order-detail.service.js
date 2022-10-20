'use strict'
const orderRepository = require('../../../data/repository/orders.repository')

const execute = async (details, id) => {
  try {
    const errors = await insertDetailOrder(details, parseInt(id))
    return createErrors(errors)
  } catch (error) {
    throw error
  }
}

const insertDetailOrder = async (details, id) => {
  try {
    const results = await Promise.allSettled(
      details.map((detail) => orderRepository.insertDetailOrder(detail, id))
    )
    const errors = results
      .filter((result) => result.status == 'rejected')
      .map((result) => result.reason.message)
    if (errors.length == results.length) {
      const error = new Error('No se pudo ingresar el pedido')
      error.errors = createErrors(errors)
      throw error
    }
    return errors
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

const createErrors = (errors) => {
  if (errors.length != 0) {
    return errors.map((error) => {
      return { message: error }
    })
  }
  return []
}

module.exports = { execute }
