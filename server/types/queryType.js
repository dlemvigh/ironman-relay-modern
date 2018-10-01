const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const userType = require("./userType");
const {
  getUser,
  getUsers
} = require("../query/userQuery");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
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
    }
  })
})

module.exports = queryType;