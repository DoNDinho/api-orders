'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const insertOrder = async (order) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.insertOrder(order)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const insertDetailOrder = async (detail, id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.insertDetailOrder(detail, id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listOrderById = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listOrderById(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listDetailOrder = async () => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listDetailOrder()
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const takeOrder = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.takeOrder(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const deliverOrder = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.deliverOrder(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
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
