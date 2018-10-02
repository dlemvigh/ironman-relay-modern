const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const {
  activityType,
  disciplineType,
  seasonType,
  userType,
} = require("./types");
const { nodeField } = require('./types/nodeType');
const {
  getActivities,
  getDisciplines,
  getSeasons,
  getUserByName,
  getUsers
} = require("./query");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    activities: {
      type: new GraphQLList(activityType),
      resolve: getActivities
    },
    disciplines: {
      type: new GraphQLList(disciplineType),
      resolve: getDisciplines
    },
    seasons: {
      type: new GraphQLList(seasonType),
      resolve: getSeasons
    },
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, { id }) => getUserByName(id)
    },
    users: {
      type: new GraphQLList(userType),
      resolve: getUsers
    },
    node: nodeField
  })
})

module.exports = queryType;