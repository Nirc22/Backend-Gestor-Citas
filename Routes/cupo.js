const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

// Controlador
const { obtenerCupo, obtenerCupos, crearCupo, actualizarCupo, eliminarCupo } = require('../controllers/cupo');

//Aplicar validación a todas las rutas
router.use(validarJWT);

// Rutas

// Obtener cupos
router.get('/listar', obtenerCupos);

// Obtener cupos por idHorario
router.get('/listar/:id', obtenerCupo);

// Crear cupo
router.post('/crear', crearCupo);

// Actualizar cupo
router.put('/actualizar/:id', actualizarCupo);

// Eliminar cupo
router.delete('/eliminar/:id', eliminarCupo);

module.exports = router;