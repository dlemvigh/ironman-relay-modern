const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');
const { getUserById, getActivitiesForSummary } = require("../query");

const summaryType = new GraphQLObjectType({
  name: "Summary",
  fields: () => ({
    id: globalIdField("Summary"),
    user: {
      type: userType,
      resolve: (root) => getUserById(root.user)
    },
    userDisplayName: {
      type: GraphQLString
    },
    score: {
      type: GraphQLFloat
    },
    week: {
      type: GraphQLInt
    },
    activities: {
      type: new GraphQLList(activityType),
      resolve: input => getActivitiesForSummary(input)
    }
  }),
  interfaces: [nodeInterface]
});

module.exports = summaryType;

const activityType = require("./activityType");
const userType = require("./userType");