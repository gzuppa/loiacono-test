const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const Company = require('./models/Company')
const { MONGODB } = require('./config.js')

const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: ({req}) => ({req})
})

mongoose.connect(MONGODB, {useNewUrlParser:true })
    .then(() => {
        console.log('MongoDB for Rocket Launching is UP!')
        return server.listen({port: 5000}) 
    })
    .then(res => {
        console.log(`GraphQL-Apollo server is on Fire at ${res.url}!`)
    })