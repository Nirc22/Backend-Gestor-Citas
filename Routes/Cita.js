const {Router} = require('express');
const {getCita, crearCita, actualizarCita, eliminarCita} = require('../controllers/Cita');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

// Validar token
router.use(validarJWT);

router.get('/listar', getCita);

router.post('/crear', crearCita);

router.put('/actualizar/:id', actualizarCita);

router.delete('/eliminar/:id', eliminarCita);

module.exports = router;