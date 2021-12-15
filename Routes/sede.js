const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();

//Controllers
const { getSede, crearSede, actualizarSede, } = require('../controllers/sede');
const { validarCampos } = require('../middlewares/validar-campos');


//Rutas

router.get('/', getSede);

router.post(
    '/create', 
    [
        check('nombre','El nombre de la sede es obligatorio').not().isEmpty(),
        check('direccion','La direccion es obligatoria').not().isEmpty(),
        check('telefono','El telefono debe ser de 10 caracteres').isLength({min:10}),
        check('horario','El horario es obligatorio').not().isEmpty(),
        check('estado','El estado de la sede es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearSede);

router.put(
    '/update/:id', 
    [
        check('nombre','El nombre de la sede es obligatorio').not().isEmpty(),
        check('direccion','La direccion es obligatoria').not().isEmpty(),
        check('telefono','El telefono debe ser de 10 caracteres').isLength({min:10}),
        check('direccion','El horario es obligatorio').not().isEmpty(),
        check('estado','El estado de la sede es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarSede);



module.exports = router;