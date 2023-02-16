const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller')
const ProductsController = require('../controllers/Products.controller')
const AdditivesController = require('../controllers/Additives.controller')
const authMiddleware = require('../../middlewares/auth-middleware')
const {body} = require('express-validator')

router.get('/products', ProductsController.getProducts)
router.get('/additives', AdditivesController.getAdditives)
router.post('/registration',
    body('login').isLength({min: 10, max: 30}),
    body('login').isString(),
    body('password').isLength({min: 10, max: 30}),
    body('password').isString(),
    UserController.registration)

router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/createOrder', authMiddleware ,UserController.create)

module.exports = router;