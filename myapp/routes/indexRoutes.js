var express = require('express');
var router = express.Router();

const Index = require('../controllers/indexController')

/* GET home page. */
router.get('/',Index.index)

module.exports = router;
