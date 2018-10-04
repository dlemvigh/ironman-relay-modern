const {
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLDate } = require("graphql-iso-date");
const { addActivity, getUserByName } = require("../query");
const viewer = require("../models/viewerModel");

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
      addActivity(input),
      getUserByName(input.user)
    ]);

    return { 
      activity,
      user,
      viewer
    };
  }
})

module.exports = addActivityMutation;

const {
  activityType,
  userType,
  viewerType
} = require("../types");