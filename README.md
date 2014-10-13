#### bigOut

export [big](http://www.macwright.org/2011/10/28/big.html) presentations to pdf

=====
#####Requires 
[node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) (included with node now...)

====
#####Setup
_Replaced dependency on phantomjs and casperjs system installs by adding them as node modules, and using shelljs to call the local phantomjs..._

```npm install``` will set up phantomjs, casperjs, shelljs and pdfkit

=====
#####Usage
create pdf of pages 0 through 38 (all of 'em') of my [playingwithfire](http://abenrob.com/playingwithfire/) presentation:

```node bigout.js http://abenrob.com/playingwithfire/ 0 38```

bigOut.pdf now sits in root!

=====
#####Caveats/future work?
* phantomjs was doing weird things with pdf exports, so I did png only, and used pdfkit to make pdf
* needs better commenting
* needs better (any?) error handling
* needs tests
