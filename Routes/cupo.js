const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { AdminOrOdontoRole } = require('../middlewares/validar-roles');

// Controlador
const { obtenerCupo, obtenerCupos, crearCupo, actualizarCupo, eliminarCupo } = require('../controllers/cupo');


// Rutas

// Obtener cupos
router.get('/listar', validarJWT, obtenerCupos);

// Obtener cupos por idHorario
router.get('/listar/:id', validarJWT, obtenerCupo);

// Crear cupo
router.post('/crear', validarJWT, AdminOrOdontoRole, crearCupo);

// Actualizar cupo
router.put('/actualizar/:id', validarJWT, AdminOrOdontoRole, actualizarCupo);

// Eliminar cupo
router.delete('/eliminar/:id', validarJWT, AdminOrOdontoRole, eliminarCupo);

module.exports = router;