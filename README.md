Monalisa [![NPM version](https://badge.fury.io/js/monalisa.png)](http://badge.fury.io/js/monalisa) [![Build Status](https://travis-ci.org/darul75/monalisa.png?branch=master)](https://travis-ci.org/darul75/monalisa) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/monalisa/counters/views.png)](https://sourcegraph.com/github.com/darul75/monalisa)
=====================

Transform image (PNG or JPEG) into CSS, useless but fun !

* Nobody will capture your pictures again
* But your browser will be crazy


Demo
------------
coming soon

Installation
------------

Using npm:

```
npm install monalisa
```


Usage
-------------

```javascript
var monalisa = require('monalisa');

 monalisa.process({type:'png', id:'png', src: 'test/github.png', dest:'./test/style.css'}, function(err, style) {
  if (err) console.log(err); return; 
                
    console.log(style); // css content, style.css by default created...
});
```

## Parameters

* `type` 'png' or 'jpeg'
* `src` jpeg or png input filepath
* `id` css output target id
* `dest` (optional) output generated css file

- MORE COMING SOON


### Help

If while building you get that kind of error 'Wrong JPEG library version: library is 90, caller expects 80.', here is what I have done:

cd /usr/local/include
sudo rm jpeglib.h
cd /usr/local/lib
sudo rm libjpeg*.*

Then everything it fine. Under Mavericks OS

### Build

You can run the tests by running

```
npm install
```
or
```
npm test
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




