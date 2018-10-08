const mongoose = require("mongoose");

const {
  disciplineModel,
  userModel,
  seasonModel
} = require("../server/models");

mongoose.connect('mongodb://localhost/ironman2', { 
  useCreateIndex: true,
  useNewUrlParser: true 
});
const db = mongoose.connection;
db.on('error', (...args) => {
  console.error('connection error: ', ...args);
  mongoose.connection.close();
});
db.once('open', async () => {
  console.log("connection open");
  await populate();
  console.log("connection closing");
  mongoose.connection.close();
});

async function populate() {
  await populateUsers();
  await populateDisciplines();
  await populateSeasons();
}

async function populateUsers() {
  const users = [
    { name: "alice", displayName: "Alice" },
    { name: "bob", displayName: "Bob" },
    { name: "charlie", displayName: "Charlie" }
  ];
  await Promise.all(users.map(user => ensure(userModel, user)));
}

async function populateDisciplines() {
  const disciplines = [
    { name: "run", displayName: "Run", score: 5, unit: "km", order: 1 },
    { name: "bike", displayName: "Bike", score: 1, unit: "km", order: 2 },
    { name: "swim", displayName: "Swim", score: 25, unit: "km", order: 3 },
    { name: "cal", displayName: "Caloric", score: .04, unit: "cal", order: 4 },
    { name: "misc", displayName: "Misc", score: 25, unit: "hours", order: 5 },
  ];
  await Promise.all(disciplines.map(disc => ensure(disciplineModel, disc)))
}

async function populateSeasons() {
  const seasons = [
     { name: "spring2018", displayName: "Spring 2018", from: 201802, to: 201820 },
     { name: "fall2018", displayName: "Fall 2018", from: 201832, to: 201850 }
  ];
  await ensureList(seasonModel, seasons);
}

async function ensureList(model, list) {
  await Promise.all(list.map(item => ensure(model, item)));
}

async function ensure(model, data) {
  let res = await model.findOne(data);
  if (res == null) {
    console.log("creating", model.modelName, data);
    res = await model.create(data);
  }
  return res;
}