const { disciplineModel } = require('../models');

module.exports = {
  async getDisciplines() {
    const disciplines = await disciplineModel.find({});
    return disciplines;
  }
}