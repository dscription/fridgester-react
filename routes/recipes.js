const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, recipesCtrl.index);
router.post('/', checkAuth, recipesCtrl.favorite);
router.get('/:id', checkAuth,recipesCtrl.getOne)
router.put('/:id', checkAuth, recipesCtrl.update)
router.delete('/:id', checkAuth, recipesCtrl.delete)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
