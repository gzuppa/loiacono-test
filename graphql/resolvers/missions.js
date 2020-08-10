const Mission = require('../../models/Mission')
const checkAuth = require('../../util/check-auth')
const { AuthenticationError, UserInputError } = require('apollo-server')

module.exports = {
    Query: {
        async getMissions(){
            try{
                const missions = await Mission.find().sort({ createdAt: -1 })
                return missions
            } catch (err){
                throw new Error(err)
            }
        },
        async getMission(_, { missionId}){
            try{
                const mission = await Mission.findById(missionId)
                if(mission){
                    return mission
                } else {
                    throw new Error('Mission not found')
                }
            } catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createMission(_, { missionName }, context){
            const user = checkAuth(context)
            console.log(user)

            const newMission = new Mission({
                missionName,
                resultSuccess,
                image,
                date,
                wiki,
                about
            })
            const mission = await newMission.save()
            context.pubsub.publish('NEW_MISSION',{
                newMission: mission
            })
            return mission
        },
        async deleteMission(_, { missionId }, context){
            const user = checkAuth(context) 
            try{
                const mission = await Mission.findById(missionId)
                if(user.username === Mission.username){
                    await mission.delete()
                    return 'Mission deleted successfully'
                } else {
                    throw new AuthenticationError('Not allow')
                }
            } catch(err){
                throw new Error(err)
            }
        },
        async likeMission(_, { missionId },context){
            const { username } = checkAuth(context)
            const mission = await Mission.findById(missionId)
            if(mission){
                if(mission.likes.find(like => like.username === username)){
                    mission.likes = mission.likes.filter(like => like.username !== user)
                } else {
                    mission.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    }) 
                }
                await mission.save()
                return mission
            } else throw new UserInputError('Mission not found')
        }
    },
    Subscription:{
        newMission: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_MISSION')
        }
    }
}