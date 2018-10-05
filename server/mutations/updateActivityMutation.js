const {
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { getUserByName, updateActivity } = require("../query");
const viewer = require("../models/viewerModel");

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
    },
    user: {
      type: userType
    },
    viewer: {
      type: viewerType,      
    }
  }),
  async mutateAndGetPayload(input) {
    const [activity, user] = await Promise.all([
      updateActivity(input),
      getUserByName(input.user)
    ]);

    return { 
      activity,
      user,
      viewer
    };
  }
})

module.exports = updateActivityMutation;

const {
  activityType,
  userType,
  viewerType
} = require("../types");