const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

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
      type: new GraphQLList(activityType)
    },
    positions: {
      type: new GraphQLList(positionType)
    },
    summaries: {
      type: new GraphQLList(summaryType)
    },
  }),
  interfaces: [nodeInterface]
})

module.exports = userType;

const activityType = require("./activityType");
const positionType = require("./positionType");
const summaryType = require("./summaryType");