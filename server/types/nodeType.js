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
  userModel,
  viewerModel
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
    case "Viewer": return viewerModel;
    default: return null;
    }
  },
  obj => {
    if (obj instanceof activityModel) return require("./activityType");
    if (obj instanceof disciplineModel) return require('./disciplineType');
    if (obj instanceof positionModel) return require("./positionType");
    if (obj instanceof seasonModel) return require("./seasonType");
    if (obj instanceof summaryModel) return require("./summaryType");
    if (obj instanceof userModel) return require("./userType");
    if (obj instanceof viewerModel) return require("./viewerType");  
    return null;
  }
)