const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();


const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getOdontologo, crearOdontologo, actualizarOdontologo, } = require('../controllers/odontologo');
const { validarCampos } = require('../middlewares/validar-campos');

//Aplicar validación a todas las rutas
router.use(validarJWT);

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
        check('password','La contraseña debe ser de minimo 6 caracteres').isLength({min:6}),
        check('idEspecializacion','El id de la especializacion es obligatoria').not().notEmpty(),
        check('idCupo','El id del horario es obligatorio').not().notEmpty(),
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