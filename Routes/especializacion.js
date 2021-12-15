const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getEspecializacion, crearEspecializacion, actualizarEspecializacion, } = require('../controllers/especializacion');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getEspecializacion);

router.post('/create', crearEspecializacion);

router.put('/update', actualizarEspecializacion);



module.exports = router;