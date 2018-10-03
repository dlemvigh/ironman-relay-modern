const {
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { addActivity } = require("../query");

const addActivityMutation = mutationWithClientMutationId({
  name: "AddActivity",
  inputFields: () => ({
    user: {
      type: new GraphQLNonNull(GraphQLString),
    },
    discipline: {
      type: new GraphQLNonNull(GraphQLString),
    },
    distance: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    date: {
      type: new GraphQLNonNull(GraphQLDate)
    }
  }),
  outputFields: () => ({
    activity: {
      type: activityType
    }
  }),
  mutateAndGetPayload(input) {
    const activity = addActivity(input);
    return { activity };
  }
})

module.exports = addActivityMutation;

const {
  activityType
} = require("../types");