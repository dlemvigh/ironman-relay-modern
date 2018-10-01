const mongoose = require("mongoose");

const {
  disciplineModel,
  userModel
} = require("../server/models");

mongoose.connect('mongodb://localhost/ironman', { 
  useCreateIndex: true,
  useNewUrlParser: true 
});
const db = mongoose.connection;
db.on('error', (...args) => {
  console.error('connection error: ', ...error);
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
}

async function populateUsers() {
  const users = [
    { id: "alice", name: "Alice" },
    { id: "bob", name: "Bob" },
    { id: "charlie", name: "Charlie" }
  ];
  await Promise.all(users.map(user => ensure(userModel, user)));
}

async function populateDisciplines() {
  const disciplines = [
    { id: "run", name: "Run", score: 5, unit: "km", order: 1 },
    { id: "bike", name: "Bike", score: 1, unit: "km", order: 2 },
    { id: "swim", name: "Swim", score: 25, unit: "km", order: 3 },
    { id: "cal", name: "Caloric", score: .04, unit: "cal", order: 4 },
    { id: "misc", name: "Misc", score: 25, unit: "hours", order: 5 },
  ];
  await Promise.all(disciplines.map(disc => ensure(disciplineModel, disc)))
}

async function ensure(model, data) {
  let res = await model.findOne(data);
  if (res == null) {
    console.log("creating", model.modelName, data);
    res = await model.create(data);
  }
  return res;
}