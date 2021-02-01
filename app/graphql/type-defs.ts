// Describe our GraphQL schema with type definitions
export const typeDefs = `
  type User {
    userId: ID!
    name: String
  }
  type Query {
    hello: String!,
    userCount: Int! @cypher(statement: "MATCH (u:User) RETURN COUNT(u)")
  }
`
