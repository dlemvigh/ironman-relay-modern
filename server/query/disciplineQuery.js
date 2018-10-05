const { disciplineModel } = require('../models');

module.exports = {
  async getDisciplineById(id) {
    const discipline = await disciplineModel.findById(id);
    return discipline;
  },

  async getDisciplines() {
    const disciplines = await disciplineModel.find({}).sort({ order: 1 });
    return disciplines;
  }
}