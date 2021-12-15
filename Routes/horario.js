const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

// Controlador
const { obtenerHorarios, obtenerHorario, crearHorario, actualizarHorario, eliminarHorario } = require('../controllers/horario');

//Aplicar validación a todas las rutas
router.use(validarJWT);

// Rutas

// Obtener Horarios
router.get('/listar', obtenerHorarios);

// Obtener Horario
router.get('/listar/:id', obtenerHorario);

// Crear Horario
router.post('/crear', crearHorario);

// Actualizar Horario
router.put('/actualizar/:id', actualizarHorario);

// Eliminar Horario
router.delete('/eliminar/:id', eliminarHorario);

module.exports = router;