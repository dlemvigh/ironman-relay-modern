const { seasonModel } = require("../models");

module.exports = {
  async getSeasonByWeek(week) {
    const season = await seasonModel.findOne({
      from: { $lte: week },
      to: { $gte: week }
    });
    if (season != null) {
      return season;
    }

    const [prev, next] = await Promise.all([
      seasonModel.findOne({ to: { $lt: week }}).sort({ to: -1 }),
      seasonModel.findOne({ from: { $gt: week }}).sort({ from: 1 })
    ]);

    const from = prev ? prev.to + 1 : null;
    const to = next ? next.from - 1 : null;

    const offSeason = new seasonModel({
      from,
      to,
      name: `offSeason${week}`,
      displayName: "Off Season"
    });

    return offSeason;
  },

  async getSeasons() {
    const seasons = await seasonModel.find({}).sort({ from: 1, to: 1});
    return seasons;
  }
}