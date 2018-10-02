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
} = require("./index");
const { nodeField } = require('./nodeType');
const {
  getDisciplines,
  getUser,
  getUsers
} = require("../query");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    activities: {
      type: new GraphQLList(activityType),
      resolve: () => []
    },
    disciplines: {
      type: new GraphQLList(disciplineType),
      resolve: getDisciplines
    },
    seasons: {
      type: new GraphQLList(seasonType),
      resolve: () => []
    },
    user: {
      type: userType,
      args: {
        id: {
          name: "id",
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, { id }) => getUser(id)
    },
    users: {
      type: new GraphQLList(userType),
      resolve: getUsers
    },
    node: nodeField
  })
})

module.exports = queryType;