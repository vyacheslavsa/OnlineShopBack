const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller')
const ProductsController = require('../controllers/Products.controller')
const AdditivesController = require('../controllers/Additives.controller')
const authMiddleware = require('../../middlewares/auth-middleware')
const {check} = require('express-validator')

const validation = [

    check('login')
        .isAlphanumeric(['en-US'])
        .withMessage('Поле логин должно состоять только из латинских букв и цифр')
        .notEmpty()
        .withMessage('Поле не может быть пустым')
        .isLength({ min:6, max:30 })
        .withMessage('Поле логина должно быть не менее 6 символов и не более 30'),

    check('password')
        .isAlphanumeric(['en-US'])
        .withMessage('Поле пароль должно состоять только из латинских букв и цифр')
        .notEmpty()
        .withMessage('Поле пароля не может быть пустым')
        .isLength({min:6,max:30})
        .withMessage('Поле пароля должно быть не меньше 6 символов и не более 30')
        .matches(/\d/)
        .withMessage("Пароль должен содержать минимум 1 цифру")

 ]

router.get('/products', ProductsController.getProducts)
router.get('/additives', AdditivesController.getAdditives)
router.post('/registration',validation, UserController.registration)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/createOrder', authMiddleware ,UserController.create)

module.exports = router;