const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { getActivitiesByWeek, getPositionsByWeek, getSummariesByWeek } = require("../query");

const weekType = new GraphQLObjectType({
  name: "Week",
  fields: () => ({
    week: {
      type: GraphQLInt
    },
    activities: {
      type: new GraphQLList(activityType),
      resolve: root => getActivitiesByWeek(root.week)
    },
    positions: {
      type: new GraphQLList(positionType),
      resolve: root => getPositionsByWeek(root.week)
    },
    summaries: {
      type: new GraphQLList(summaryType),
      resolve: root => getSummariesByWeek(root.week)
    }
  }),
});

module.exports = weekType;

const activityType = require("./activityType");
const positionType = require("./positionType");
const summaryType = require("./summaryType");