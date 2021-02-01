import { ApolloServer } from 'apollo-server-micro'

import { augmentedSchema } from 'graphql/schema'
import { driver } from 'neo4j/db'

export const neo4jDriverInstance = driver()

export const apolloServer = new ApolloServer({
  schema: augmentedSchema.schema,
  context: ({ req }) => ({ req, driver: neo4jDriverInstance }),

  // Disable GraphIQL in production by setting these to false
  introspection: true,
  playground: true,
})

// We need to disable the bodyParser so we can consume our API endpoint as a stream
// https://nextjs.org/docs/api-routes/api-middlewares#custom-config
export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
