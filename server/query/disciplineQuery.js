const { disciplineModel } = require('../models');

module.exports = {
  async getDiscipline(id) {
    const discipline = await disciplineModel.findById(id);
    return discipline;
  },

  async getDisciplines() {
    const disciplines = await disciplineModel.find({});
    return disciplines;
  }
}