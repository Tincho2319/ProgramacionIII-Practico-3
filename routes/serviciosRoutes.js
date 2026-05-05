const { Router } = require('express')
const { getServicios } = require('../controllers/serviciosController')

const rutas = Router()

rutas.get('/', getServicios)
rutas.get('/:id', getServicios)

module.exports = rutas