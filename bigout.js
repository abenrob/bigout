var casper = require('casper').create();

var url,start,end;

if (casper.cli.args.length < 3) {
  casper
    .echo("Usage: $ casperjs bigout.js http://example.com startNum endNum")
    .exit(1)
  ;
} else {
  url = casper.cli.args[0];
  start = casper.cli.args[1];
  end = casper.cli.args[2];
}

var h = 768, w = 1024, pageArray = [];

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
      this.echo(page);
      this.thenOpen(url+'#'+page, function() {
        this.echo(this.getTitle()); // display the title of page
        this.viewport(w, h);
        this.capture('outputs/pwf-'+page+'.png', {
          top: 0,
          left: 0,
          width: w,
          height: h
        });
      });
    });
});

casper.run();