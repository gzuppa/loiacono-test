const { model, Schema } = require('mongoose')

const missionSchema = new Schema({
    missionName: String,
    successResult: Boolean
})

module.exports = model('Mission', missionSchema)