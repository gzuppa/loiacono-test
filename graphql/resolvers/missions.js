const Mission = require('../../models/Mission')

module.exports = {
    Query: {
        async getMissions(){
            try{
                const missions = await Mission.find()
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
    }
}