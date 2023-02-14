const AdditivesModel = require('../../models/Additives')

class AdditivesController {
    async getAdditives (req, res, next) {
        try {
            const additives = await AdditivesModel.find({category: req.query.category});
            return res.json(additives)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new AdditivesController()