const { Router, response } = require('express');
const router = Router();

// Controlador
const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');

// Rutas

// Obtener cupo
//router.get('/:id', obtenerCupo);

// Crear cupo
//router.post('/crear', crearCupo);

// Actualizar cupo
//router.put('/actualizar/:id', actualizarCupo);

// Eliminar cupo
//router.delete('/eliminar/:id', actualizarCupo);

module.exports = router;