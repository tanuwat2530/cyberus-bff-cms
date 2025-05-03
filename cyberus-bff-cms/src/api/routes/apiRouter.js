const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const updateController = require('../controllers/updateController');
const configController = require('../controllers/configController');
const listUserController = require('../controllers/listUserController');

router.post('/add', userController.addUser);
router.post('/list-user', listUserController.listUser);
//router.post('/update', updateController.updateUser);
//router.post('/config', configController.configController);

module.exports = router;
