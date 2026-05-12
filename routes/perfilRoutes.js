const { Router } = require('express');
const { obtenerPerfilPorId } = require('../controllers/perfilController');
const router = Router();

// Definimos la ruta con el parámetro :id
router.get('/:id', obtenerPerfilPorId);

module.exports = router;