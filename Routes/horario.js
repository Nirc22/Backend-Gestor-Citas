const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

// Controlador
const { obtenerHorarios, obtenerHorario, crearHorario, actualizarHorario, eliminarHorario } = require('../controllers/horario');

//Aplicar validación a todas las rutas
router.use(validarJWT);

// Rutas

// Obtener Horarios
router.get('/', obtenerHorarios);

// Obtener Horario
router.get('/:id', obtenerHorario);

// Crear Horario
router.post('/create', crearHorario);

// Actualizar Horario
router.put('/update/:id', actualizarHorario);

// Eliminar Horario
router.delete('/delete/:id', eliminarHorario);

module.exports = router;