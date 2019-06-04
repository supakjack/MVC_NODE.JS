var express = require('express');
var router = express.Router();

const Users = require('../controllers/usersController')

/* GET users listing. */
router.get('/',Users.index)
router.post('/add',Users.add)
router.post('/delete/:_id',Users.del)
router.post('/edit/:_id',Users.setEditById)
router.get('/edit/:_id',Users.getEditById)
router.post('/search',Users.searchById)

module.exports = router;
