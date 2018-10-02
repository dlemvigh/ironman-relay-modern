const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

const seasonType = new GraphQLObjectType({
  name: "Season",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    id: globalIdField("Season"),
    name: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    from: {
      type: GraphQLInt
    },
    to: {
      type: GraphQLInt
    }
  }),
  interfaces: [nodeInterface]
})

module.exports = seasonType;