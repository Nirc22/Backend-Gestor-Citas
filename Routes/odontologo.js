const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getOdontologo, crearOdontologo, actualizarOdontologo, } = require('../controllers/odontologo');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getOdontologo);

router.post('/create', crearOdontologo);

router.put('/update', actualizarOdontologo);



module.exports = router;