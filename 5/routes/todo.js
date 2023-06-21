const express = require('express');
const controllers = require('../controllers/todo'); //call controller in routes
const router = express.Router();

router.post('/',controllers.add); 
router.get('/',controllers.get);
router.delete('/',controllers.delete); 
router.put('/',controllers.update); //update all fields (list and title)
router.patch('/',controllers.updateList); //update specific fields (list)

module.exports = router;