const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getEspecializacion, crearEspecializacion, actualizarEspecializacion, } = require('../controllers/especializacion');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getEspecializacion);

router.post(
    '/create', 
    [
        check('nombre','El nombre de la especializacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearEspecializacion);

router.put(
    '/update/:id', 
    [
        check('nombre','El nombre de la especializacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarEspecializacion);



module.exports = router;