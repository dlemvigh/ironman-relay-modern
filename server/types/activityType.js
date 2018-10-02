const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

const activityType = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    id: globalIdField("Activity"),
    userId: {
      type: GraphQLID,      
    },

    distance: {
      type: GraphQLFloat
    },
    disciplineId: {
      type: GraphQLID
    },
    score: {
      type: GraphQLFloat
    },
    week: {
      type: GraphQLInt
    },
    date: {
      type: GraphQLString
    }
  }),
  interfaces: [nodeInterface]
});

module.exports = activityType;