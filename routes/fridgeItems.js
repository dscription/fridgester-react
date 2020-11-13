const express = require('express');
const router = express.Router();
const fridgeItemsCtrl = require('../controllers/fridgeItems');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, fridgeItemsCtrl.index);
router.post('/', checkAuth, fridgeItemsCtrl.create);
router.get('/:id', checkAuth, fridgeItemsCtrl.getOne);
router.put('/:id', checkAuth, fridgeItemsCtrl.update);
router.delete('/:id', checkAuth, fridgeItemsCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
