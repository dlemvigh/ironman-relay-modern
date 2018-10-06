const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');
const { getActivitiesByUser, getPositionsByUser, getSummariesByUser } = require("../query");

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: globalIdField("User"),
    name: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    active: {
      type: GraphQLBoolean
    },
    activities: {
      type: new GraphQLList(activityType),
      resolve: (root) => getActivitiesByUser(root.id)
    },
    positions: {
      type: new GraphQLList(positionType),
      resolve: (root) => getPositionsByUser(root.id)
    },
    summaries: {
      type: new GraphQLList(summaryType),
      resolve: (root) => getSummariesByUser(root.id)
    },
  }),
  interfaces: [nodeInterface]
})

module.exports = userType;

const activityType = require("./activityType");
const positionType = require("./positionType");
const summaryType = require("./summaryType");