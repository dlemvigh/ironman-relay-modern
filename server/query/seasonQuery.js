const { seasonModel } = require("../models");

module.exports = {
  async getSeasons() {
    const seasons = await seasonModel.find({}).sort({ from: 1, to: 1});
    return seasons;
  }
}