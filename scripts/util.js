const fs = require("fs");
const { printSchema } = require("graphql/utilities");

const paths = require('../config/paths');

module.exports = {
  buildSchema() { 
    const schema = require("../server/schema");
    fs.writeFileSync(paths.graphqlSchema, printSchema(schema));
  }
}