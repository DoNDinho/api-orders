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

const listOrderById = (id) => {
  return {
    name: 'SP_LISTAR_PEDIDO_POR_ID',
    statements: [`CALL SP_LISTAR_PEDIDO_POR_ID(${id});`],
    values: []
  }
}

const listDetailOrder = () => {
  return {
    name: 'SP_LISTAR_DETALLE_PEDIDO',
    statements: [`CALL SP_LISTAR_DETALLE_PEDIDO();`],
    values: []
  }
}

const takeOrder = (id) => {
  return {
    name: 'SP_TOMAR_PEDIDO',
    statements: [`CALL SP_TOMAR_PEDIDO(${id});`],
    values: []
  }
}

const deliverOrder = (id) => {
  console.log(id)
  return {
    name: 'SP_ENTREGAR_PEDIDO',
    statements: [`CALL SP_ENTREGAR_PEDIDO(${id});`],
    values: []
  }
}

module.exports = {
  insertOrder,
  insertDetailOrder,
  listOrderById,
  listDetailOrder,
  takeOrder,
  deliverOrder
}
