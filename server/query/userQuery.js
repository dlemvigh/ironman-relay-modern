const mongoose = require("mongoose");
const {
  userModel 
} = require("../models");

module.exports = {
  async getUser(name) {
    const user = await userModel.findOne({ name });
    return user;
  },
  async getUsers() {
    const users = await userModel.find({});
    return users;
  }
}