#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const Compiler = require('../lib/Compiler');

program
  .version('1.0.0')
  .option('-e, --entry <entry>', 'entry file')
  .option('-o, --output <output>', 'output file');

// commander.js treats arguments after '--' as literal arguments.
// pnpm run adds '--' to separate script arguments.
// We need to remove it before parsing.
const rawArgs = process.argv;
const separatorIndex = rawArgs.indexOf('--');
const args = separatorIndex === -1 ? rawArgs : rawArgs.slice(0, separatorIndex).concat(rawArgs.slice(separatorIndex + 1));

program.parse(args);

const options = program.opts();

let entry = options.entry;
let output;

const configPath = path.resolve(process.cwd(), 'webpack.config.js');
if (fs.existsSync(configPath)) {
    const config = require(configPath);
    if (!entry) {
        entry = config.entry;
    }
    if (!options.output && config.output) {
        output = path.resolve(config.output.path, config.output.filename);
    } else if(options.output) {
        output = path.resolve(process.cwd(), options.output);
    }
} else if (options.output) {
    output = path.resolve(process.cwd(), options.output);
}


if (entry && output) {
    const absoluteEntry = path.resolve(process.cwd(), entry);
    const compiler = new Compiler({ entry: absoluteEntry, output });
    const dirname = path.dirname(output);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
    const code = await compiler.run();
    console.log("%c Line:52 🍢 code", "color:#7f2b82", code);
    // fs.writeFileSync(output, code);
} else {
    program.help();
}