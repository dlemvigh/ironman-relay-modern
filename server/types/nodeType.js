const { 
  fromGlobalId,
  nodeDefinitions 
} = require("graphql-relay");
const {
  activityModel,
  disciplineModel,
  positionModel,
  seasonModel,
  summaryModel,
  userModel
} = require("../models");

module.exports = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    switch(type) {
      case "Activity": return activityModel.findById(id);
      case "Discipline": return disciplineModel.findById(id);
      case "Position": return positionModel.findById(id);
      case "Season": return seasonModel.findById(id);
      case "Summary": return summaryModel.findById(id);
      case "User": return userModel.findById(id);

      default: return null;
    }
  },
  obj => {
    if (obj instanceof activityModel) return require("./activityModel");
    if (obj instanceof disciplineModel) return require('./disciplineType');
    if (obj instanceof positionModel) return require("./positionModel");
    if (obj instanceof seasonModel) return require("./seasonModel");
    if (obj instanceof summaryModel) return require("./summaryModel");
    if (obj instanceof userModel) return require("./userModel");
  
    return null;
  }
)