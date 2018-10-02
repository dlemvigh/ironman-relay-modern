const { fromGlobalId } = require("graphql-relay");
const { 
  activityModel,
  disciplineModel,
  userModel,  
} = require("../models");
const { getWeek } = require("./util");

module.exports = {
  async getActivities() {
    const activities = await activityModel.find({});
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

    return activity;
  },

  async updateActivity(input) {
    console.log("update activity", input);
    if (!(input.distance > 0)) throw "Distance must be >0";

    const [ activity, user, discipline ] = await Promise.all([
      activityModel.findById(input.id),
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

    console.log("updated", newActivity, new Date());

    return newActivity;
  }
}