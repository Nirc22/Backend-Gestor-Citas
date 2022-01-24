const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getRol, crearRol, actualizarRol } = require('../controllers/rol');
const { validarCampos } = require('../middlewares/validar-campos');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas
router.get('/', getRol);

router.post(
    '/create', 
    [
        check('nombre','El nombre del rol es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearRol);

router.put(
    '/update/:id', 
    [
        check('nombre','El nombre del rol es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarRol);

module.exports = router;