const express = require('express');
const router = express.Router();

const {
    getProducts,
    getFillings,
    getBreads,
    getVegetables,
    getSizes,
    getSauces,
    getMarkets
} = require('../controllers/conrtollers')

router.get('/products', getProducts)
router.get('/breads', getBreads)
router.get('/markets', getMarkets)
router.get('/fillings', getFillings)
router.get('/sauces', getSauces)
router.get('/vegetables', getVegetables)
router.get('/sizes', getSizes)

module.exports = router;