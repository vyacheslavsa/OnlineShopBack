const DataSchema = require('../../models/Data')

module.exports.getData = async (req,res) => {
    await DataSchema.findOne().then(result => {
        console.log(result)
        res.send(result)
    });
}