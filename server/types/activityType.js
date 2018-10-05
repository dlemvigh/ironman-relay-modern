const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { nodeInterface } = require('./nodeType');
const { getDisciplineById, getUserById } = require("../query");

const activityType = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    id: globalIdField("Activity"),
    user: {
      type: userType,
      resolve: (root) => getUserById(root.user)
    },
    userDisplayName: {
      type: GraphQLString
    },
    discipline: {
      type: disciplineType,
      resolve: (root) => getDisciplineById(root.discipline)  
    },
    disciplineDisplayName: {
      type: GraphQLString
    },
    distance: {
      type: GraphQLFloat
    },
    unit: {
      type: GraphQLString
    },
    score: {
      type: GraphQLFloat
    },
    week: {
      type: GraphQLInt
    },
    date: {
      type: GraphQLDate
    },
  }),
  interfaces: [nodeInterface]
});

module.exports = activityType;

const disciplineType = require("./disciplineType");
const userType = require("./userType");