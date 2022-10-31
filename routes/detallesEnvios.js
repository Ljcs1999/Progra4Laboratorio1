const {Router} = require('express');
const { getdetallesEnvios, putdetallesEnvios, deletedetallesEnvios, postdetallesEnvios } = require('../controllers/detallesEnvios');
const router = Router();

router.get('/', getdetallesEnvios)
router.post('/', postdetallesEnvios)
router.put('/:id', putdetallesEnvios)
router.delete('/:id', deletedetallesEnvios)

module.exports = router