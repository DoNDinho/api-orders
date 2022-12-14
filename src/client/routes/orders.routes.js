const express = require('express')
const insertOrderService = require('../../business/services/orders/insert-order.service')
const insertOrderDetailService = require('../../business/services/orders/insert-order-detail.service')
const listOrderByIdService = require('../../business/services/orders/list-order-by-id.service')
const listOrderDetailService = require('../../business/services/orders/list-order-detail.service')
const takeOrderService = require('../../business/services/orders/take-order.service')
const deliverOrderService = require('../../business/services/orders/deliver-order')
const router = express.Router()

router.post(`/Orders/v1/orders`, async (req, res, next) => {
  try {
    const order = await insertOrderService.execute(req.body.order)
    const message = 'Pedido registrado con exito'
    const response = { order }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(201).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Orders/v1/orders/:id`, async (req, res, next) => {
  try {
    const errors = await insertOrderDetailService.execute(
      req.body.order.details,
      req.params.id
    )
    const message = 'Detalle de pedido registrado con exito'
    const response = { message, errors }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(201).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get(`/Orders/v1/orders/:id`, async (req, res, next) => {
  try {
    const order = await listOrderByIdService.execute(req.params.id)
    const message = 'Pedido obtenido con exito'
    const response = { order }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get(`/Orders/v1/details`, async (req, res, next) => {
  try {
    const order = await listOrderDetailService.execute()
    const message = 'Pedidos obtenidos con exito'
    const response = { order_details: order }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.put(`/Orders/v1/details/:id/take-order`, async (req, res, next) => {
  try {
    const status = await takeOrderService.execute(req.params.id)
    const message = 'Pedido tomado con exito'
    const response = { message, status }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.put(`/Orders/v1/details/:id/deliver`, async (req, res, next) => {
  try {
    const order = await deliverOrderService.execute(req.params.id)
    const message = 'Pedidos entregados con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

module.exports = router
