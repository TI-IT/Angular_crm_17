const express = require('express');
const controller = require('./unit_controller')
const router = express.Router();

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.post('/:id', controller.update)

module.exports = router