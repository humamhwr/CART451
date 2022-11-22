var natural = require('natural');
require('natural');
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");

// getSentiment expects an array of strings
console.log(analyzer.getSentiment(["african americans", "and", "blacks", "have", "good", "cuisine" ]));





