const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');
const { getActivitiesBySeason } = require("../query");
const seasonType = new GraphQLObjectType({
  name: "Season",
  fields: () => ({
    id: globalIdField("Season"),
    name: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    from: {
      type: GraphQLInt
    },
    to: {
      type: GraphQLInt
    },
    activities: {
      type: new GraphQLList(activityType),
      resolve: (root) => getActivitiesBySeason(root.from, root.to)
    }
  }),
  interfaces: [nodeInterface]
})

module.exports = seasonType;

const activityType = require("./activityType")