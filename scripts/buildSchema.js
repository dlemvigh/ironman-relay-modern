const fs = require("fs");
const { printSchema } = require("graphql/utilities");
const schema = require("../server/schema");
const paths = require('../config/paths');

module.exports = () => {
  fs.writeFileSync(paths.graphqlSchema, printSchema(schema));
}
