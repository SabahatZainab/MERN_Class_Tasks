const express = require('express');
const controllers = require('../controllers/main'); //call controller in routes
const router = express.Router();

router.get('/',controllers.health); 
router.get('/info',controllers.appInfo); //localhost:3000/info
router.get('/sum',controllers.sum);

module.exports = router;