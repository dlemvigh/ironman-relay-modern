const { positionModel, summaryModel } = require("../models");

module.exports = {
  async calcPositions(week) {
    const summaries = await summaryModel.find({ week }).sort({ score: -1 });
    await Promise.all(summaries.map(async ({ user, userDisplayName, week }, index) => {
      await positionModel.update({
        user, 
        week
      }, {
        user,
        userDisplayName,
        week,
        position: index + 1
      }, {
        upsert: true
      })
    }));
    const users = summaries.map(x => x.user);
    await positionModel.find({
      user: { $nin: users }
    }).remove();
  }
}