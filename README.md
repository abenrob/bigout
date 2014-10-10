#### bigOut

export [big](http://www.macwright.org/2011/10/28/big.html) presentations to pngs

=====

prereqs:
* phantomjs
* casperjs

````brew update && brew install phantomjs``` (or [some other methods](http://phantomjs.org/download.html))

```brew install casperjs --devel``` (or [some other methods](http://docs.casperjs.org/en/latest/installation.html))

=====

#####usage

print out pngs of pages 0 through 38 (all of 'em') of my [playingwithfire](http://abenrob.com/playingwithfire/) presentation:

```casperjs bigout.js http://abenrob.com/playingwithfire/ 0 38```

now I have an 'output' folder full of 39 pngs which I can open in preview and save as a pdf.

=====

caveats/future work?
* phantomjs was doing weird things with pdf exports, so I did png only
* would be rad to also combine into multi-page pdf...