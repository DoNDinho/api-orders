'use strict'
const orderDetailConverter = (orderData) => {
  const detail = {
    menu: {
      name: orderData.NOMBRE_MENU,
      price: {
        amount: orderData.VALOR_MENU
      }
    },
    quantity: orderData.CANTIDAD
  }
  return detail
}

module.exports = { orderDetailConverter }
