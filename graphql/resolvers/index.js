const missionResolvers = require('./missions')
const companyResolvers = require('./companies')
const usersResolvers = require('./users')
const commentsResolvers = require('./comments')

module.exports = {
    Mission:{
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...missionResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...missionResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...missionResolvers.Subscription
    }
}