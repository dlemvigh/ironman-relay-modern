const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: () => 'John Doe'
    },
    age: {
      type: GraphQLInt,
      resolve: () => 43
    },
    gender: {
      type: GraphQLString,
      resolve: () => "M"
    },
  })
})

module.exports = userType;