const mongoose = require("mongoose");
const {
  userModel 
} = require("../models");

module.exports = {
  async getUserById(id) {
    const user = await userModel.findById(id);
    return user
  },
  
  async getUserByName(name) {
    const user = await userModel.findOne({ name });
    return user;
  },

  async getUsers() {
    const users = await userModel.find({}).sort({ name: 1 });
    return users;
  }
}