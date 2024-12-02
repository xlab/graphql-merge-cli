#! /usr/bin/env node

const { Command } = require("commander");

const package = require("./package.json");
const GraphqlMerge = require("./src/index");

const program = new Command();

program
  .version(package.version)
  .requiredOption(
    "-s, --schema <string>",
    "glob path containing graphql schema files to be merged"
  )
  .requiredOption(
    "-o, --output <string>",
    "output name of the new combined file that will be created"
  );

program.parse();

const { schema, output } = program.opts();

console.log(`Running graphql-merge-cli version - ${package.version}`);
GraphqlMerge(schema, output);
