// Describe our GraphQL schema with type definitions
export const typeDefs = `
  type User {
    userId: ID!
    name: String
  }
  type Query {
    hello: String!,
    users: [User]! @cypher(statement: "MATCH (u:User) RETURN u")
  }
`
