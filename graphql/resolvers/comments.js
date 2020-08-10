const Mission = require('../../models/Mission')
const checkAuth = require('../../util/check-auth')
const { UserInputError, AuthenticationError } = require('apollo-server')
const User = require('../../models/User')

module.exports = {
    Mutation: {
        createComment: async(_, { missionId, body }, context) => {
            const { username } = checkAuth(context)
            if(body.trim() === ''){
                throw new UserInputError('Your comment is important for us',{
                    errors:{
                        body: 'Come on! Comment something :)'
                    }
                })
            }
            const mission = await Mission.findById(missionId)
            if(mission){
                mission.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await mission.save()
                return mission
            } else throw new UserInputError('Mission not found')
        },
        async deleteComment(_, {missionId, commentId}, context){
            const { username } = checkAuth(context)
            const mission = await Mission.findById(missionId)
            if(mission){
                const commentIndex = mission.comments.findIndex(c => c.id === commentId)
                if(mission.comments[commentIndex].username === username){
                    mission.comments.splice(commentIndex, 1)
                    await mission.save()
                    return mission
                } else {
                    throw new AuthenticationError('Not allow')
                }
            } else {
                throw new UserInputError('Mission not found')
            }
        }
    }
}