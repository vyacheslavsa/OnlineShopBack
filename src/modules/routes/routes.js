const express = require('express');
const router = express.Router();

const {getData} = require('../controllers/data.conrtollers')

router.get('/getdata' , getData)

module.exports = router;