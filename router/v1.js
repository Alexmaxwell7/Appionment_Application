const express 			= require('express');
const router 			  = express.Router();
const UserController = require("../controller/userController");
// const AppionmentController = require('../controller/appionmentController');
const AboutController = require('../controller/aboutController');
const EmployeeController = require("../controller/employeeController");
const appointmentController = require("../controller/appointments");
const slotController = require('../controller/slot');
const {verifyJwtToken}=require('../config/jwtHelper');
router.post('/createAdmin',UserController.createAdmin);
// router.get('/getAppionment',verifyJwtToken,AppionmentController.getAppionment);
// router.get('/getEmployeeId',verifyJwtToken,AppionmentController.getEmployeeId);
// router.get('/getCustomerId',verifyJwtToken,AppionmentController.getCustomerId);
// router.post('/createAppionment',AppionmentController.createAppionment);
// router.put('/editAppionment',AppionmentController.editAppionment);
// router.delete('/deleteAppionment',AppionmentController.deleteAppionment);
// router.post('/login',UserController.login);
//aboutus router
router.get('/getAbout',AboutController.getAbout);
router.get('/getAboutId/:id',AboutController.getAboutId);
router.post('/createAbout',AboutController.createAbout);
router.put('/editAbout/:id',AboutController.editAbout);
router.delete('/deleteAbout/:id',AboutController.deleteAbout);
//employee details router
router.get('/getEmployee',EmployeeController.getEmployee);
router.get('/getEmployeeId/:id', EmployeeController.getEmployeeId);
router.post('/insertEmployee/', EmployeeController.InsertEmployee);
router.put('/updateEmployee/:id', EmployeeController.updateEmployee);
router.delete('/removeEmployee/:id', EmployeeController.removeEmployee);
//appionment and slot router
router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentCreate', appointmentController.create);


module.exports = router;