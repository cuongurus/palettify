'use strict'

const path = require('path')
const fs = require('fs')
const common = require('./lib/common')

// decode to raw data
exports.extractRaw = function (files_input, callback) {
    var input = path.parse(files_input);
    if (input.ext == '') {
        fs.readdir(files_input, (err, files) => {
            if (err) {
                callback(err, null);
            } else {
                var data = {};
                var i = 0;
                files.forEach(file => {
                    common.decode(path.join(files_input, file), (err, ret) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            i++;
                            var name = path.parse(file).name;
                            data[name] = ret;
                            if (i === files.length) {
                                callback(null, data);
                            }
                        }
                    })
                })
            }
        })
    } else {
        var data = {};
        common.decode(files_input, (err, ret) => {
            if (err) {
                callback(err, null);
            } else {
                data[input.name] = ret;
                callback(null, data);
            }
        })
    }
}

// decode and save to json file
exports.extractToFile = function (files_input, file_output, callback) {
    this.extractRaw(files_input, (err, ret) => {
        if(err){
            callback(err);
        }else{
            common.save(ret, file_output, callback);
        }
    })

}
