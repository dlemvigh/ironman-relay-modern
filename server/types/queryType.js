const {
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const userType = require("./userType");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    foo: {
      type: GraphQLString,
      resolve: () => new Date().toLocaleTimeString()
    },
    me: {
      type: userType,
      resolve: () => ({ id: "Jane doe" })
    }
  })
})

module.exports = queryType;