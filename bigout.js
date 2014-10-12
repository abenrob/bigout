// args validation and variable assignment
var argslen = process.argv.length;

if (argslen < 5) {
  console.log('missing args');
  console.log('Usage: $ node bigout.js http://example-big-presentation.com startNum endNum');
  process.exit(1);
}

var url = process.argv[2];
var start = process.argv[3];
var end = process.argv[4];


// shelljs to call local phantomjs
var shell = require('shelljs');
var phjs = 'node_modules/phantomjs/bin/phantomjs';

shell.exec(phjs+' index.js '+url+' '+start+' '+end);

// PDF Kit
var PDFDocument = require('pdfkit');
var fs = require('fs');

var outDir = fs.readdirSync('outputs/');

var outputs = [];
for (var i=0; i < outDir.length; i++){
  if (outDir[i].split('.')[1] === 'png'){
    outputs.push(outDir[i]);
  }
}

var doc_options = {
        size: 'A4',
        layout: 'landscape',
        info: {
            Title: 'big.js presentation',
            Author: 'bigOut'
        }
    }

var doc = new PDFDocument(doc_options);

var outDoc = fs.createWriteStream('bigOut.pdf');

doc.pipe(outDoc);

for (var i=0; i < outputs.length; i++){
  if (i > 0){
    doc.addPage();
  }
  doc.image('outputs/'+outputs[i], 0, 0, {width: 841, height: 595});
}

for (var i=0; i < outDir.length; i++){
  if (outDir[i].split('.')[1] === 'png'){
    fs.unlink('outputs/'+outDir[i]);
  }
}

// finalize the PDF and end the stream
doc.end();