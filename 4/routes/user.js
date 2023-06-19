const express = require('express');
const controllers = require('../controllers/user'); //call controller in routes
const router = express.Router();

router.get('/',controllers.login); 

module.exports = router;