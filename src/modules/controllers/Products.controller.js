const ProductsModel = require('../../models/Product')

class ProductsController {
    async getProducts (req, res, next){
        try {
            const products = await ProductsModel.find();
            return res.json(products)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductsController()

