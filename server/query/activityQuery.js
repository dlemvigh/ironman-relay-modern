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
    console.log("add activity", input);
    if (!(input.distance > 0)) throw "Distance must be >0";

    const [ user, discipline ] = await Promise.all([
      userModel.findOne({ name: input.user }),
      disciplineModel.findOne({ name: input.discipline })
    ]);
    if (user == null) throw "User not found";
    if (discipline == null) throw "Discipline not found";

    console.log("user", user);
    console.log("disc", discipline);
    const score = input.distance * discipline.score;
    const week = getWeek(input.date);

    const activity = await new activityModel({
      user,
      userDisplayName: user.displayName,
      discipline,
      disciplineDisplayName: discipline.displayName,
      distance: input.distance,
      score,
      date: input.date,
      week
    }).save();

    console.log("act", activity);

    return activity;
  }
}