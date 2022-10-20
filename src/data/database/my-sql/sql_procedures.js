'use strict'
const insertOrder = (order) => {
  const email = order.user?.contact?.email ? order.user.contact.email : 'NULL'
  const tableId = order.table.id
  return {
    name: 'SP_INSERTAR_PEDIDO',
    statements: [`CALL SP_INSERTAR_PEDIDO("${email}", ${tableId});`],
    values: []
  }
}

const insertDetailOrder = (detail, id) => {
  const idMenu = detail.menu.id
  const quantity = detail.quantity
  const comment = detail.comment ?? 'NULL'
  return {
    name: 'SP_INSERTAR_DETALLE_PEDIDO',
    statements: [
      `CALL SP_INSERTAR_DETALLE_PEDIDO(${id}, ${idMenu}, ${quantity}, "${comment}");`
    ],
    values: []
  }
}

module.exports = {
  insertOrder,
  insertDetailOrder
}
