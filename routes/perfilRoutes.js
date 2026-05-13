const { Router } = require('express');
const { getPerfilById } = require('../controllers/perfilController');

const router = Router();

// Esta es la ruta que tu perfil.js llamará: /perfil/1
router.get('/:id', getPerfilById);

module.exports = router;