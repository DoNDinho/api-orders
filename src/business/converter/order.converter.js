'use strict'
const orderConverter = (orderData) => {
  const order = {
    id: orderData.ID_PEDIDO
  }
  return order
}

module.exports = { orderConverter }
