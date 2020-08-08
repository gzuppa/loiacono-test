const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const { MONGODB } = require('./config.js')

const typeDefs = gql`
    type Query {
        missionName: String!
    }
    `

const resolvers = {
    Query: {
        missionName: () => 'Starlink-9 (v1.0) & BlackSky Global 5-6'
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