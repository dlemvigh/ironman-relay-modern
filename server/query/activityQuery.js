const { activityModel } = require("../models");

module.exports = {
  async getActivities() {
    const activities = await activityModel.find({});
    return activities;
  }
}