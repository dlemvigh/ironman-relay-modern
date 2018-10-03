const {
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { updateActivity } = require("../query");

const updateActivityMutation = mutationWithClientMutationId({
  name: "UpdateActivity",
  inputFields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
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
    const activity = updateActivity(input);
    return { activity };
  }
})

module.exports = updateActivityMutation;

const {
  activityType
} = require("../types");