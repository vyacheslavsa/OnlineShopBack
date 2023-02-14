const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller')

const {getProducts, getAdditives} = require('../controllers/Products.conrtollers')

router.get('/products', getProducts)
router.get('/additives', getAdditives)
router.post('/registration', UserController.registration)

module.exports = router;