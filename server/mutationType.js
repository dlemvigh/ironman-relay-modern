const {
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const {
  addActivityMutation
} = require("./mutations");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    // foo: {
    //   type: GraphQLString,
    //   resolve: () => "bar"
    // },
    addActivity: addActivityMutation,
    // editActivity: editActivityMutation,
    // removeActivity: removeActivityMutation,
    // addUser: addUserMutation,
    // addSeason: addSeasonMutation,
  })
});

module.exports = mutationType;