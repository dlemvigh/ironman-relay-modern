const {
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const {
  addActivityMutation,
  updateActivityMutation
} = require("./mutations");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addActivity: addActivityMutation,
    updateActivity: updateActivityMutation
    // removeActivity: removeActivityMutation,
    // addUser: addUserMutation,
    // addSeason: addSeasonMutation,
  })
});

module.exports = mutationType;