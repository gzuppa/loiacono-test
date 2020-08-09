const missionResolvers = require('./missions')
const companyResolvers = require('./companies')

module.exports = {
    Query: {
        ...missionResolvers.Query
    },
    
}