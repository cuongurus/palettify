#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const palettify = require('wi-palettify')

const dir = process.cwd();
program
    .version('1.0.2')
    .option('-r, --require <input>', 'A palette file or folder')
    .option('-o, --outfile <output>', 'Write the data to this file')
    .parse(process.argv)

var inPath = dir;
var out = program.outfile || '/palette.json';
var outPath = path.join(dir, out);

if (program.require) {
    inPath = path.join(dir, program.require);
}

palettify.extractToFile(inPath, outPath, (err) => {
    if (err) {
        console.log(err);
    }
})