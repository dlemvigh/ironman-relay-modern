const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require("graphql");

const {
  getActivities,
  getDisciplines,
  getSeasons,
  getUserByName,
  getUsers
} = require("./query");

const viewerType = new GraphQLObjectType({
  name: "Viewer",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => "Hello, world!"
    },
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
    week: {
      type: weekType,
      args: {
        week: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (_, { week }) => ({ week })
    },
  })
})

module.exports = viewerType;

const {
  activityType,
  disciplineType,
  seasonType,
  userType,
  weekType
} = require("./types");
