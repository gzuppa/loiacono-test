const Mission = require('../../models/Mission')

module.exports = {
    Query: {
        async getMission(){
            try{
                const missions = await Mission.find()
                return missions
            } catch (err){
                throw new Error(err)
            }
        }
    }
}