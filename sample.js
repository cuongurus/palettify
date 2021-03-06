const palettify = require('./index')
const path = require('path')

var dir = process.cwd();
palettify.extractToFile(path.join(dir, '/Palette/Earth.pal'), 'D://tmp/palette1.json', (err) => {
    if (err) {
        console.log(err);
    }
})

palettify.extractToFile(path.join(dir, '/Palette'), 'D://tmp/palette2.json', (err) => {
    if (err) {
        console.log(err);
    }
});

palettify.extractRaw(path.join(dir, '/Palette/Blue.pal'), (err, ret) => {
    if (err) {
        console.log(err);
    }else{
        console.log(ret);
    }
});