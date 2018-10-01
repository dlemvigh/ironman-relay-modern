const { 
  fromGlobalId,
  nodeDefinitions 
} = require("graphql-relay");
const {
  disciplineModel,
  userModel
} = require("../models");

module.exports = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    switch(type) {
      case "User": return userModel.findById(id);
      case "Discipline": return disciplineModel.findById(id);
      default: return null;
    }
  },
  obj => {
    if (obj instanceof userModel) return require('./userType');
    if (obj instanceof disciplineModel) return require('./disciplineType');
    return null;
  }
)