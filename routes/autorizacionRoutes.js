const { Router } = require('express');
const { login } = require('../controllers/autorizacionController'); // Importa la función desde tu archivo real

const router = Router();

// Define el camino para el POST
router.post('/login', login); 

module.exports = router;
