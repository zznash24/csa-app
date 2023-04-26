var express = require('express');
var router = express.Router();
const { authenticate } = require('../middlewares/auth');

router.post('/', authenticate, async (req, res) => {
  // Route implementation
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with Users');
});

module.exports = router;
