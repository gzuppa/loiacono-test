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
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getMissions: [Mission]
        getMission(missionId: ID!): Mission
        
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createMission(missionName: String!): Mission!
        deleteMission(missionId: ID!): String!
    }
    `;