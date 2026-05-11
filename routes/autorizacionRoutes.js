const { Router } = require('express');
// IMPORTAMOS la función desde el controlador para manejar la lógica del login
const { login } = require('../controllers/autorizacionController');

const router = Router();

// El servidor "escucha" un POST en la ruta /login y ejecuta la función importada
router.post('/login', login); 

module.exports = router;