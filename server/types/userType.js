const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} = require("graphql");

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    active: {
      type: GraphQLBoolean
    }
  })
})

module.exports = userType;