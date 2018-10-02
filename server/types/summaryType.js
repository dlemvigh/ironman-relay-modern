const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

const summaryType = new GraphQLObjectType({
  name: "Summary",
  fields: () => ({
    id: globalIdField("Summary"),
    userId: {
      type: GraphQLID,      
    },
    user: {
      type: userType
    },
    score: {
      type: GraphQLFloat
    },
    week: {
      type: GraphQLInt
    },
  }),
  interfaces: [nodeInterface]
});

module.exports = summaryType;

const userType = require("./userType");