const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLID
  } = require("graphql");
  const resolve = require("./resolve");
  
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
        resolve: () => "F"
      },
    })
  })
  
  const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      foo: {
        type: GraphQLString,
        resolve
      },
      me: {
        type: userType,
        resolve: () => ({ id: "Jane doe" })
      }
    })
  })
  
  const schema = new GraphQLSchema({
    query: queryType
  });
  
  module.exports = schema;
  