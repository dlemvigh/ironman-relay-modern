const { fromGlobalId } = require("graphql-relay");
const { 
  activityModel,
  disciplineModel,
  userModel,  
} = require("../models");
const { calcSummary } = require("./summaryQuery");
const { getWeek } = require("./util");

module.exports = {
  async getActivityById(id) {
    return await activityModel.findById(id);
  },

  async getActivities() {
    const activities = await activityModel.find({}).sort({ date: -1 });
    return activities;
  },  

  async getActivitiesByUser(user) {
    const activities = await activityModel.find({ user });
    return activities;
  },

  async getActivitiesBySeason(from, to) {
    const activities = await activityModel.find({
      week: {
        $gte: from,
        $lte: to
      }
    }).sort({ week: 1});
    return activities;
  },

  async getActivitiesByWeek(week) {
    const activities = await activityModel.find({ week });
    return activities;
  },
  
  async getActivitiesForSummary({ user, week }) {
    const activities = await activityModel.find({ user, week });
    return activities;
  },

  async addActivity(input) {
    if (!(input.distance > 0)) throw "Distance must be >0";

    const [ user, discipline ] = await Promise.all([
      userModel.findOne({ name: input.user }),
      disciplineModel.findOne({ name: input.discipline })
    ]);
    if (user == null) throw "User not found";
    if (discipline == null) throw "Discipline not found";

    const score = input.distance * discipline.score;
    const week = getWeek(input.date);

    const activity = await new activityModel({
      user,
      userDisplayName: user.displayName,
      discipline,
      disciplineDisplayName: discipline.displayName,
      distance: input.distance,
      unit: discipline.unit,
      score,
      date: input.date,
      week
    }).save();

    if (activity == null) throw "Unable to add activity";
    await calcSummary(user._id, week);

    return activity;
  },

  async updateActivity(input) {
    if (!(input.distance > 0)) throw "Distance must be >0";
    const { id } = fromGlobalId(input.id);
    const [ activity, user, discipline ] = await Promise.all([
      activityModel.findById(id),
      userModel.findOne({ name: input.user }),
      disciplineModel.findOne({ name: input.discipline })
    ]);
    if (activity == null) throw "Activity not found";
    if (user == null) throw "User not found";
    if (discipline == null) throw "Discipline not found";

    const score = input.distance * discipline.score;
    const week = getWeek(input.date);
    const newActivity = await Object.assign(activity, {
      user,
      userDisplayName: user.displayName,
      discipline,
      disciplineDisplayName: discipline.displayName,
      distance: input.distance,
      unit: discipline.unit,
      score,
      date: input.date,
      week
    }).save();

    if (newActivity == null) throw "Unable to update activity";
    await calcSummary(user._id, week);

    return newActivity;
  },

  async deleteActivity(id) {
    const activity = await activityModel.findById(id);
    if (activity == null) throw "Activity not found";

    await activity.remove();
    await calcSummary(user, week);

    return id;
  }
}