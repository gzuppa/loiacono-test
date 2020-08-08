const { model, Schema } = require('mongoose')

const companySchema = new Schema({
    companyName: String,
    description: String,
    links: String
})

module.exports = model('Company', companySchema)