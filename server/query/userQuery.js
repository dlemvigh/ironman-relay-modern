const mongoose = require("mongoose");
const {
  userModel 
} = require("../models");

module.exports = {
  async getUser(id) {
    const user = await userModel.findOne({ id });
    return user;
  },
  async getUsers() {
    const users = await userModel.find({});
    return users;
  }
}