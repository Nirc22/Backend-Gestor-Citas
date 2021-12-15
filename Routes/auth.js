const { Router, response } = require('express');
const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post(
    '/crear', 
    [
        check('name','EL nombre es obligatorio').not().isEmpty().trim(),
        check('apellido','EL apellido es obligatorio').not().isEmpty().trim(),
        check('email', 'El email es obligatorio').isEmail(),
        check('telefono','El telefono debe ser de 10 caracteres').isLength({min:10}),
        check('documento','El documenot debe tener al menos 7 caracteres').isLength({min:7}),
        check('fechaNacimiento','La fecha de nacimiento es obligatoria').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min:6}),
        check('rol',"El rol es obligatorio").not().isEmpty(),
        validarCampos
        
    ],
    crearUsuario);

router.post(
    '/login', 
    [
        check('email','El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    loginUsuario);

router.post('/renew', revalidarToken);

module.exports = router;