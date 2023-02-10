const express = require('express');
const router = express.Router();

const {
    getProducts,
    getAdditives
} = require('../controllers/conrtollers')

router.get('/products', getProducts)
router.get('/additives', getAdditives)

module.exports = router;