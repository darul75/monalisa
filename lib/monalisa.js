/*! 
* @license monalisa - v0.0.1
* (c) 2013 Julien VALERY https://github.com/darul75/monalisa
* License: MIT 
*/
function Monalisa(){}var fs=require("fs"),pixelr=require("pixelr");Monalisa.prototype.process=function(a,b){if("function"==typeof b&&a){this.options=a;var c=1,d=this.options.type,e=this.options.filename,f="jpeg"==d?3:4;return pixelr.read(e,d,function(a){for(var d=a.width,e=(a.height,a.pixels),g=0,h=0,i="",j=" #img {position: absolute;width: 0;height: 0;box-shadow:",k="#",l=0;l<e.length;l+=f){k+=e[l].toString(16),k+=e[l+1].toString(16),k+=e[l+2].toString(16);var m=h*c,n=g*c;i=m+"px ",i+=n+"px ",i+="1px ",i+="1px ";var o=l==e.length-f?";":",";i+=k+o,7===k.length&&(j+=i),alphae="",i="",k="#",h==d&&(h=0,g++),h++}j+="\n}",fs.writeFileSync("style.css",j),b("ok")}),this}};var monalisa=new Monalisa;module.exports=monalisa;