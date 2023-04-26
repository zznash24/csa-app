const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');

router.post('/', authenticate, async (req, res) => {
  // Route implementation
});
router.get('/', function(req, res, next) {
    res.send('respond with Orders');
  });
module.exports = router;