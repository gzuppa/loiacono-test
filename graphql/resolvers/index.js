const missionResolvers = require('./missions')
const companyResolvers = require('./companies')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')

module.exports = {
    Query: {
        ...missionResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...missionResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}