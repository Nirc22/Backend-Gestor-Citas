const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getRol, crearRol, actualizarRol } = require('../controllers/rol');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getRol);

router.post('/create', crearRol);

router.put('/update', actualizarRol);



module.exports = router;