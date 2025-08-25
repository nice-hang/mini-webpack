#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const miniWebpack = require('../mini-webpack');

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

if (options.entry && options.output) {
    const entry = path.resolve(process.cwd(), options.entry);
    const output = path.resolve(process.cwd(), options.output);
    const code = miniWebpack(entry);
    const dirname = path.dirname(output);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
    fs.writeFileSync(output, code);
    console.log(`Bundle created at: ${output}`);
} else {
    program.help();
}