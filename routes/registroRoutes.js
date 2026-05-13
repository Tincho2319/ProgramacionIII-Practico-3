const { Router } = require('express');
const { registrarUsuario } = require('../controllers/registroController.js');
const router = Router();

router.post("/registro", registrarUsuario);

module.exports = router;