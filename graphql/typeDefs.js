const { gql } = require('apollo-server')

module.exports = gql`
    type Mission{
        id: ID!
        missionName: String!
        resultSuccess: Boolean!
        image: String!
        date: String!
        wiki: String!
        about: String!
    }
    type Query {
        getMission: [Mission]
    }
    `;