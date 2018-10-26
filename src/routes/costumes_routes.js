const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/costumes_controller');

router.get('/', ctrl.getAllCostumes);
router.get('/:id', ctrl.getCostumeById);
router.post('/', ctrl.createCostume);
// router.put('/:id', ctrl.updateCostume);
// router.delete('/:id', ctrl.deleteCostume);

module.exports = router;
