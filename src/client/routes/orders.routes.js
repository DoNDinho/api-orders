const express = require('express')
const insertOrderService = require('../../business/services/orders/insert-order.service')
const insertOrderDetailService = require('../../business/services/orders/insert-order-detail.service')
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

module.exports = router
