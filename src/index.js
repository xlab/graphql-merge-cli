const fs = require('fs');
const { join } = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');

const merge = require("./merge");

module.exports = (schemaGlob, output) => {
    console.log(`🔎 Searching for graphql schema files in ${schemaGlob}`);
    const files = loadFilesSync(schemaGlob);

    console.log(`👉 Found ${files.length} for merging`);
    const combinedFile = merge(files);

    fs.writeFileSync(output, combinedFile);
    console.log(`💯 Successfully created a combined schema file named ${output}`);
};
