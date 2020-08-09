const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const Mission = require('./models/Mission')
const Company = require('./models/Company')
const { MONGODB } = require('./config.js')

const typeDefs = gql`
    type Mission{
        id: ID!
        missionName: String!
        resultSuccess: Boolean!
        image: String!
        date: Date!
        wiki: String!
        about: String!
    }
    type Query {
        getMission: [Mission]
    }
    `

const resolvers = {
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

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser:true })
    .then(() => {
        console.log('MongoDB for Rocket Launching is UP!')
        return server.listen({port: 5000}) 
    })
    .then(res => {
        console.log(`GraphQL-Apollo server is on Fire at ${res.url}!`)
    })