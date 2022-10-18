const { Router } = require('express');
const { getExpense, postExpense } = require('../controllers/expense.controller');

const router = Router();

router.get('/:monthID', getExpense)
router.post('/', postExpense);

module.exports = router;