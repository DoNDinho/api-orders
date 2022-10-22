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
  if (orderData.ID_DETALLE) detail.id = orderData.ID_DETALLE
  if (orderData.NUMERO_MESA) detail.table = { number: orderData.NUMERO_MESA }
  if (orderData.COMENTARIO) detail.comment = orderData.COMENTARIO
  return detail
}

module.exports = { orderDetailConverter }
