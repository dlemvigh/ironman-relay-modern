const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const {
  disciplineType,
  userType,
} = require("./index");
const { nodeField } = require("./node");
const {
  getDisciplines,
  getUser,
  getUsers
} = require("../query");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    disciplines: {
      type: new GraphQLList(disciplineType),
      resolve: getDisciplines
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