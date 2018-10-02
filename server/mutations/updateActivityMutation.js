const {
  GraphQLString,
  GraphQLFloat,
  GraphQLID
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { updateActivity } = require("../query");

const updateActivityMutation = mutationWithClientMutationId({
  name: "UpdateActivity",
  inputFields: () => ({
    id: {
      type: GraphQLID
    },
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
    const activity = updateActivity(input);
    return { activity };
  }
})

module.exports = updateActivityMutation;

const {
  activityType
} = require("../types");