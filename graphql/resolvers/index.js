const missionResolvers = require('./missions')
const companyResolvers = require('./companies')
const usersResolvers = require('./users')

module.exports = {
    Query: {
        ...missionResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}