const palettify = require('./index')
const path = require('path')

var dir = process.cwd();
palettify.extractFromFile(path.join(dir, '/Palette/Earth.pal'), 'D://tmp/palette1.json', (err) => {
    if (err) {
        console.log(err);
    }
})

palettify.extractFromFolder(path.join(dir, '/Palette'), 'D://tmp/palette2.json', (err) => {
    if (err) {
        console.log(err);
    }
});