#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const palettify = require('palettify')

const dir = process.cwd();
program
    .version('1.0.1')
    .option('-r, --require <input>', 'A palette file or folder')
    .option('-o, --outfile <output>', 'Write the data to this file')
    .parse(process.argv)

if(program.require){
    var require = path.join(dir, program.require);
    var out = program.outfile || '/palette.json';
    var outPath = path.join(dir, out);
    palettify.extractToFile(require, outPath, (err) => {
        if(err){
            console.log(err);
        }
    })
}