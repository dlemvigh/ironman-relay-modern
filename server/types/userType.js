const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./node');

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    id: globalIdField("User"),
    name: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    active: {
      type: GraphQLBoolean
    }
  }),
  interfaces: [nodeInterface]
})

module.exports = userType;