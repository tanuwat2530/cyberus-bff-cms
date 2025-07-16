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
const deleteServiceController = require('../controllers/deleteServiceController');
const listLogController = require('../controllers/listLogController');
const listAllServiceController = require('../controllers/listAllServiceController');
const pieReportController = require('../controllers/pieReportController');
const chartReportController = require('../controllers/chartReportController');


router.post('/login', loginController.loginUser);
router.post('/session', sessionController.sessionUser);
router.post('/add', userController.addUser);
router.post('/list-user', listUserController.listUser);
router.post('/list-service', listServiceController.listService);
router.post('/list-log', listLogController.listLog);
router.post('/config', configController.configUser);
router.post('/update-service', updateServiceController.updateService);
router.post('/delete-service', deleteServiceController.deleteService);
router.post('/all-shortcode', listAllServiceController.allService);
router.post('/pie-report', pieReportController.pieReport);
router.post('/chart-report', chartReportController.chartReport);


module.exports = router;
