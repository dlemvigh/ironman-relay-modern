const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');
const { getUserById } = require("../query");

const positionType = new GraphQLObjectType({
  name: "Position",
  fields: () => ({
    id: globalIdField("Position"),
    user: {
      type: userType,
      resolve: (root) => getUserById(root.user)
    },
    userDisplayName: {
      type: GraphQLString
    },
    position: {
      type: GraphQLInt
    },
    week: {
      type: GraphQLInt
    },
  }),
  interfaces: [nodeInterface]
});

module.exports = positionType;

const userType = require("./userType");