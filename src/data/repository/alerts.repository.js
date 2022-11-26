'use strict'
const { get } = require('../../business/utils/http-consumer/http-consumer.service')

const createAlert = async () => {
	try {
    const url = process.env.API_ALERTS_URL
    const headers = { 'Content-Type': 'application/json' }
    await get({ url, headers })
	} catch (error) {
		console.log('Error en repositorio de alertas ', error.message)
	}
}

module.exports = { createAlert }
