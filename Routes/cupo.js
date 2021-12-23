const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

// Controlador
const { obtenerCupoById, obtenerCupos, crearCupo, actualizarCupo, eliminarCupo } = require('../controllers/cupo');

//Aplicar validación a todas las rutas
router.use(validarJWT);

// Rutas

// Obtener cupos
router.get('/', obtenerCupos);

// Obtener cupos por idHorario
router.get('/:id', obtenerCupoById);

// Crear cupo
router.post('/create',
    [
        check('horaInicio','la hora es obligatoria').not().isEmpty(),
        check('horaFin','la hora es obligatoria').not().isEmpty()
    ],
    validarCampos,
    crearCupo
);

// Actualizar cupo
router.put('/update/:id',
    [
        check('horaInicio','la hora es obligatoria').not().isEmpty(),
        check('horaFin','la hora es obligatoria').not().isEmpty()
    ],
    validarCampos,
    actualizarCupo
);

// Eliminar cupo
router.delete('/delete/:id', eliminarCupo);

module.exports = router;