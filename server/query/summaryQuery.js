const { activityModel, summaryModel } = require("../models");
const { calcPositions } = require("./positionQuery");

module.exports = {
  async getSummariesByUser(user) {
    const summaries = await summaryModel.find({ user }).sort({ week: 1 });
    return summaries;
  },

  async getSummariesByWeek(week) {
    const summaries = await summaryModel.find({ week }).sort({ score: -1 });
    return summaries;
  },

  async calcSummary(user, week) {

    const result = await activityModel.aggregate([{
      $match: { user, week }
    }, {
      $group: { _id: "$userDisplayName", score: { $sum: "$score" } }
    }]);

    if (result) {
      const [{ _id: userDisplayName, score }] = result;
      await summaryModel.updateMany({
        user, week
      }, {
        user,
        userDisplayName,
        score,
        week
      }, {
        upsert: true,
        setDefaultsOnInsert: true
      });
    } else {
      await summaryModel.findOneAndRemove({ user, week });
    }

    await calcPositions(week);
  }
}