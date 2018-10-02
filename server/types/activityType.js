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
    id: globalIdField("Activity"),
    user: {
      type: userType
    },
    discipline: {
      type: disciplineType
    },
    distance: {
      type: GraphQLFloat
    },
    score: {
      type: GraphQLFloat
    },
    week: {
      type: GraphQLInt
    },
    date: {
      type: GraphQLString
    },
  }),
  interfaces: [nodeInterface]
});

module.exports = activityType;

const disciplineType = require("./disciplineType");
const userType = require("./userType");