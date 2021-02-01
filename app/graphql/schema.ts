import { makeAugmentedSchema } from '@neo4j/graphql'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const augmentedSchema = makeAugmentedSchema({
  typeDefs,
  resolvers,
})
