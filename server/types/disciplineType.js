const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const disciplineType = new GraphQLObjectType({
  name: "Discipline",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    id: {
      type: GraphQLString
    },
    name: {
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
  })
});

module.exports = disciplineType;