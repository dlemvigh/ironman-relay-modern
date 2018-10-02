const {
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const {
  addActivityMutation,
  updateActivityMutation,
  deleteActivityMutation
} = require("./mutations");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addActivity: addActivityMutation,
    updateActivity: updateActivityMutation,
    deleteActivity: deleteActivityMutation
    // addUser: addUserMutation,
    // addSeason: addSeasonMutation,
  })
});

module.exports = mutationType;