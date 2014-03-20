// test/main.js
var monalisa = require('../src/monalisa');
var assert = require("assert");

describe('transform call', function() {
    describe('with png', function() {
        it('', function(done) {
            monalisa.process({type:'png', id:'png', src: 'test/github.png', dest:'./test/style.css'}, function(err, style) {
                
                assert.notEqual(style, '');                        

                done();
            });
        });
    });

    describe('with jpeg', function() {
        it('', function(done) {
            monalisa.process({type:'jpeg', id:'jpeg', src: 'test/toilet2.jpg', dest:'./test/style2.css'}, function(err, style) {
                
                assert.notEqual(style, '');

                done();
            });
        });
    });

});