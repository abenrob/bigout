phantom.casperPath = 'node_modules/casperjs';
phantom.injectJs(phantom.casperPath + '/bin/bootstrap.js');

var casper = require('casper').create();

var url = casper.cli.args[0];
var start = casper.cli.args[1];
var end = casper.cli.args[2];

var h = 595, w = 842, pageArray = [];

for (var i = start; i <= end; i++){
  pageArray.push(i);
}

casper.start(
    url+'#'+start, function(){
      this.echo('starting'); // display the title of page
      this.viewport(w, h);
    }
  ).then(function() {
    this.each(pageArray, function(casper,page) { 
      this.thenOpen(url+'#'+page, function() {
        this.echo(this.getTitle()); // display the title of page
        this.viewport(w, h);
        this.capture('outputs/'+(page < 10 ? '0' : '')+page+'.png', {
          top: 0,
          left: 0,
          width: w,
          height: h
        });
      });
    });
});

casper.run();