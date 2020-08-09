const { model, Schema } = require('mongoose')

const missionSchema = new Schema({
    missionName: String,
    resultSuccess: Boolean,
    image: String,
    date: Date,
    wiki: String,
    about: String
})

module.exports = model('Mission', missionSchema)