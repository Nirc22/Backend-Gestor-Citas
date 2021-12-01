const { Router, response } = require('express');
const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

router.post('/', crearUsuario);

router.post('/login', loginUsuario);

router.post('/renew', revalidarToken);

module.exports = router;