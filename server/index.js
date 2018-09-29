'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Ensure environment variables are read.
require('../config/env');

const express = require("express");
const graphqlHTTP = require("express-graphql");
const  compression = require('compression')

const paths = require('../config/paths');
const schema = require("./schema");

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(compression())

app.use("/graphql", graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true,
}));

app.use(express.static(paths.appBuild));

app.listen(DEFAULT_PORT, HOST);
