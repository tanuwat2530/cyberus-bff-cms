const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
//const updateController = require('../controllers/updateController');
const configController = require('../controllers/configController');
const listUserController = require('../controllers/listUserController');
const listServiceController = require('../controllers/listServiceController');
const updateServiceController = require('../controllers/updateServiceController');


router.post('/login', loginController.loginUser);
router.post('/session', sessionController.sessionUser);
router.post('/add', userController.addUser);
router.post('/list-user', listUserController.listUser);
router.post('/list-service', listServiceController.listService);
router.post('/config', configController.configUser);
router.post('/update-service', updateServiceController.updateService);


module.exports = router;
