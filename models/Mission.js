const { model, Schema } = require('mongoose')

const missionSchema = new Schema({
    missionName: String,
    successResult: Boolean,
    image: String,
    date: Date,
    wiki: String,
    about: String
})

module.exports = model('Mission', missionSchema)