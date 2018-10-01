const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require('./node');

const disciplineType = new GraphQLObjectType({
  name: "Discipline",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    id: globalIdField("Discipline"),
    name: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    },
    score: {
      type: GraphQLFloat
    },
    unit: {
      type: GraphQLString
    },
    order: {
      type: GraphQLInt
    }
  }),
  interfaces: [nodeInterface]
});

module.exports = disciplineType;