const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./nodeType');

const positionType = new GraphQLObjectType({
  name: "Position",
  fields: () => ({
    id: globalIdField("Position"),
    user: {
      type: userType
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