const {Router} = require('express');
const { getprecios, postprecios, putprecios, deleteprecios } = require('../controllers/precios');
const router = Router();

router.get('/', getprecios)
router.post('/', postprecios)
router.put('/:id', putprecios)
router.delete('/:id', deleteprecios)

module.exports = router