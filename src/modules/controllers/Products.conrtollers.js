const ProductsModel = require('../../models/Product')
const AdditivesModel = require('../../models/Additives')


module.exports.getProducts = async (req, res) => {
    try {
        const data = await ProductsModel.find();
        return res.send(data);
    } catch(error) {
        return res.status(500).json(error)
    }
}

module.exports.getAdditives = async (req, res) => {
    try {
        const data = await AdditivesModel.find({category: req.query.category});
        return res.send(data);
    } catch(error) {
        return res.status(500).json(error)
    }
}

