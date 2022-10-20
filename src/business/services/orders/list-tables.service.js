'use strict'
const tablesRepository = require('../../../data/repository/tables.repository')
const { tableConverter } = require('../../converter/table.converter')

const execute = async () => {
  try {
    const tablesData = await listTables()
    const tables = tablesData.map((table) => tableConverter(table))
    return tables
  } catch (error) {
    throw error
  }
}

const listTables = async () => {
  try {
    const result = await tablesRepository.listTables()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
