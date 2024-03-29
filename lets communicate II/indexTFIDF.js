// const portNumber = 4200;
// const app = express(); //make an instance of express
// const server = require("http").createServer(app);
// Pulling our concordance object from a separate "module" - concordance.js
// Load a file for quick testing

const TFIDF = require('./TFIDF');
let fs = require('fs');

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    let filenames = ['triggerwords.json'];
  
    for (let i = 0; i < filenames.length; i++) {
        getTermFreq(filenames[i]);
    }

    for (let i = 0; i < filenames.length; i++) {
        getDocFreq(filenames[i]);
    }

    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}

  function getDocFreq(filename) {
    let data =  fs.readFileSync(filename, 'utf8');
     tfIDF.docFreq(data);
 }

  function getTermFreq(filename) {
   let data =  fs.readFileSync(  filename, 'utf8');
    tfIDF.termFreq(data);
}









