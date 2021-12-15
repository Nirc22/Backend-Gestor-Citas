const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();

//Controllers
const { getEspecializacion, crearEspecializacion, actualizarEspecializacion, } = require('../controllers/especializacion');
const { validarCampos } = require('../middlewares/validar-campos');


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
    '/update', 
    [
        check('nombre','El nombre de la especializacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarEspecializacion);



module.exports = router;