# palettify
Convert Palette files to RGBa json

# Install
With [npm](http://npmjs.org) do:
```
npm install -g palettify
```

# Usage
```js
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
```
# CLI
From the command line, cd to your chrome app folder and do:
```
palettify [options]
```
Options:

| short | full | description |
| --- | --- | --- |
| -h | --help | output usage information |
| -V | --version | output the version number|
| -r | --require  [input]| A palette file or folder |
| -o | --outfile  [outfile]| Write the data to this file |
