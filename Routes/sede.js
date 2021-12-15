const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getSede, crearSede, actualizarSede, } = require('../controllers/sede');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getSede);

router.post('/create', crearSede);

router.put('/update', actualizarSede);



module.exports = router;