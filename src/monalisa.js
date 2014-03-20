var fs = require('fs'),
pixelr = require('pixelr');

function Monalisa() {
  
}

Monalisa.prototype.process = function(options, next) {
  if (typeof next !== 'function')
    return;

  if (!options)
    return;
  this.options= options;

  var style = '';
  var pixelSize = 1; // 8

  var type = this.options.type;
  var filename = this.options.src;
  var id = this.options.id || 'img';
  var dest = this.options.dest;

  // var type = 'png';

  var pixelStep = type == 'jpeg' ? 3 : 4; 

  pixelr.read(filename, type, function(err, image) {
    if (err) return next(err);
    
    var w = image.width;
    var h = image.height;
    var pixels = image.pixels;

    // 400 x 300

    var i = 1;
    var row = 0;
    var col = 0;

    var pixelStr = '';
    var style = ' #'+id+' {' + 
      'position: absolute;' + 
      'width: 0;' + 
      'height: 0;' + 
      'box-shadow:';
    
    //var pixelColor = 'rgba('; 
    var pixelColor = '#';

    var step = 1;    

    for (var j=0;j<pixels.length;j+=pixelStep) {      
      
      // JPEG : 3
      // PNG : 4
      pixelColor += pixels[j].toString(16);
      pixelColor += pixels[j+1].toString(16);
      pixelColor += pixels[j+2].toString(16);      
        
      var currentRow = col * pixelSize;
      var currentCol = row * pixelSize;
        
      pixelStr = currentRow + "px ";
      pixelStr +=  currentCol + "px ";
      pixelStr += '1px ';
      pixelStr += '1px ';        
      
      var end = j == pixels.length - pixelStep ? ';' : ',';
      pixelStr += pixelColor+end;

      if (pixelColor.length === 7)
        style += pixelStr;

      //console.log(pixelStr);

      alphae = '';
      pixelStr = '';
      // pixelColor = 'rgba(';
      pixelColor = '#';        

      if (col == w) {          
        col = 0;
        row++;          
      }     

      col++;             

    }

    style += '\n}';

    console.log(dest);
    if (dest)
      fs.writeFileSync(dest, style);

    next(null, style);

  });
  return style;
};

/**
* Export default singleton.
*/
var monalisa = new Monalisa();
module.exports = monalisa;