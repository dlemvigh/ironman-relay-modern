const { activityModel, summaryModel } = require("../models");
const { calcPositions } = require("./positionQuery");

module.exports = {
  async calcSummary(user, week) {

    const result = await activityModel.aggregate([{
      $match: { user, week }
    }, {
      $group: { _id: "$userDisplayName", score: { $sum: "$score" } }
    }]);

    if (result) {
      const [{ _id: userDisplayName, score }] = result;
      await summaryModel.update({
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