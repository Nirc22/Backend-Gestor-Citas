const { Router } = require('express');
const router = Router();

const {enviarLink,restablecer} = require('../controllers/password-reset.js');


router.post('/', enviarLink);
router.post('/:id/:token', restablecer);


module.exports = router;