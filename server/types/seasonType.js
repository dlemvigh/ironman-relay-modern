const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

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
      type: new GraphQLList(activityType)
    }
  }),
  interfaces: [nodeInterface]
})

module.exports = seasonType;

const activityType = require("./activityType")