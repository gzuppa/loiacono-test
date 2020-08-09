const { model, Schema } = require('mongoose')

const companySchema = new Schema({
    companyName: String,
    summary: String,
    links: String,
    employees: Number,
    ceo: String
})

module.exports = model('Company', companySchema)