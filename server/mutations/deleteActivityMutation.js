const {
  GraphQLID
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { deleteActivity } = require("../query");

const deleteActivityMutation = mutationWithClientMutationId({
  name: "DeleteActivity",
  inputFields: () => ({
    id: {
      type: GraphQLID
    }
  }),
  outputFields: () => ({
    id: {
      type: GraphQLID
    }
  }),
  mutateAndGetPayload(input) {
    const id = deleteActivity(input.id);
    return { id };
  }
})

module.exports = deleteActivityMutation;
