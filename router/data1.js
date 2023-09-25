const express = require('express');
const router = express.Router();
const data1Controller = require('../controllers/data1');



router.get('/data_1', data1Controller.data1_Page);
router.get('/add_data_1', data1Controller.addData1_Page);

module.exports = router;