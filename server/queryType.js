const {
  GraphQLObjectType,
} = require("graphql");

const viewerType = require("./viewerType");
const { nodeField } = require('./types/nodeType');

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: {
      type: viewerType,
      resolve: () => ({})
    },
    node: nodeField
  })
})

module.exports = queryType;