const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();

//Controllers
const { getOdontologo, crearOdontologo, actualizarOdontologo, } = require('../controllers/odontologo');
const { validarCampos } = require('../middlewares/validar-campos');


//Rutas

router.get('/', getOdontologo);

router.post(
    '/create', 
    [
        check('nombre','El nombre es obligatorio').not().notEmpty(),
        check('apellidos','El apellido es obligatorio').not().notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('telefono','El telefono debe ser de 10 caracteres').isLength({min:10}),
        check('documento','El documenot debe tener al menos 7 caracteres').isLength({min:7}),
        check('fechaNacimiento','La fecha de nacimiento es obligatoria').not().isEmpty(),
        check('idEspecializacion','El id de la especializacion es obligatoria').not().notEmpty(),
        check('idHorario','El id del horario es obligatorio').not().notEmpty(),
        check('idSede','El id de la sede es obligatoria').not().notEmpty(),
        validarCampos
    ],
    crearOdontologo);

router.put(
    '/update/:id', 
    [
        check('nombre','El nombre es obligatorio').not().notEmpty(),
        check('nombre','El apellido es obligatorio').not().notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('telefono','El telefono debe ser de 10 caracteres').isLength({min:10}),
        check('documento','El documenot debe tener al menos 7 caracteres').isLength({min:7}),
        check('fechaNacimiento','La fecha de nacimiento es obligatoria').not().isEmpty(),
        check('idEspecializacion','El id de la especializacion es obligatoria').not().notEmpty(),
        check('idHorario','El id del horario es obligatorio').not().notEmpty(),
        check('idSede','El id de la sede es obligatoria').not().notEmpty(),
        validarCampos
    ],
    actualizarOdontologo);



module.exports = router;