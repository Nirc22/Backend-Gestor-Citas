const {Router, response} = require('express');
const {getCita, crearCita, actualizarCita, eliminarCita} = require('../controllers/Cita');
const router = Router();

router.get('/listar', getCita);

router.post('/crear', crearCita);

router.put('/actualizar/:id', actualizarCita);

router.delete('/eliminar/:id', eliminarCita);

module.exports = router;