'use strict'

const path = require('path')
const fs = require('fs')
const LineReader = require('line-by-line')
const pad = require('pad-number')
const mkdirp = require('mkdirp')

// decode Palette file to json
exports.decode = function (pal, callback) {
    var data = [];
    var lr = new LineReader(pal);
    lr.on('error', function (err) {
        // 'err' contains error object
        if (err) {
            callback(err, null);
        }
    });

    lr.on('line', function (line) {
        // 'line' contains the current line without the trailing newline character.
        line = line.trim();
        line = line.replace(/\s+\s/g, "");

        var RGBA = {
            alpha: 1,
            red: 0,
            green: 0,
            blue: 0
        }

        var raw = line.split("=");
        var color = pad(parseInt(raw[1]).toString(2), 32);

        var sub = color.match(/.{1,8}/g);
        RGBA.alpha = (100 - parseInt(sub[0], 2)) / 100;
        RGBA.red = parseInt(sub[1], 2);
        RGBA.green = parseInt(sub[2], 2);
        RGBA.blue = parseInt(sub[3], 2);
        data.push(RGBA);
    });

    lr.on('end', function () {
        // All lines are read, file is closed now.
        // console.log('All lines are read, file is closed now.');
        // console.log(data);
        callback(null, data);
    });

}

exports.save = function(data, file_output, callback){
    var d = JSON.stringify(data, null, 4) + '\n';
    var dir = path.parse(file_output).dir;
    mkdirp(dir, (err) => {
        if (err) {
            callback(err);
        } else {
            fs.writeFile(file_output, d, 'utf-8', (err) => {
                if (err) {
                    callback(err);
                }
            })
        }
    })
}