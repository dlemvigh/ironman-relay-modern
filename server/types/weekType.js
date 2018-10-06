const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { 
  getActivitiesByWeek, 
  getPositionsByWeek,
  getSeasonByWeek, 
  getSummariesByWeek 
} = require("../query");

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
    season: {
      type: seasonType,
      resolve: root => getSeasonByWeek(root.week)
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
const seasonType = require("./seasonType");
const summaryType = require("./summaryType");