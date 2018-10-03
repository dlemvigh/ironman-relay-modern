const { seasonModel } = require("../models");

module.exports = {
  async getSeasons() {
    const seasons = await seasonModel.find({});
    return seasons;
  }
}