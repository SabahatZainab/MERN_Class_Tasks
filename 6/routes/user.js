const express = require('express');
const controllers = require('../controllers/user'); //call controller in routes
const router = express.Router();

router.post('/login',controllers.login); 
router.post('/signup',controllers.signup); 

module.exports = router;