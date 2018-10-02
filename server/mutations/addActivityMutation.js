const {
  GraphQLString,
  GraphQLFloat
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { addActivity } = require("../query");

const addActivityMutation = mutationWithClientMutationId({
  name: "AddActivity",
  inputFields: () => ({
    user: {
      type: GraphQLString,      
    },
    discipline: {
      type: GraphQLString,
    },
    distance: {
      type: GraphQLFloat,
    },
    date: {
      type: GraphQLDate
    }
  }),
  outputFields: () => ({
    activity: {
      type: activityType
    }
  }),
  mutateAndGetPayload(input) {
    return addActivity(input);
  }
})

module.exports = addActivityMutation;

const {
  activityType
} = require("../types");