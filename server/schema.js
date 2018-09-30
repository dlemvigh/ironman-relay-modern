  const { GraphQLSchema, } = require("graphql");
  const { queryType } = require("./types");
    
  const schema = new GraphQLSchema({
    query: queryType
  });
  
  module.exports = schema;
  