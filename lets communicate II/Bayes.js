// index.js

var natural = require('natural');

var classifier = new natural.BayesClassifier();
classifier.addDocument('brownbag', 'Non-inclusive');
classifier.addDocument('lunch', 'inclusive');
classifier.addDocument('guys', 'Non-inclusive');
classifier.addDocument('yall', 'inclusive');


classifier.addDocument('salesman', 'Non-inclusive');
classifier.addDocument('salesperson', 'inclusive');
classifier.addDocument('retarded', 'Non-inclusive');
classifier.addDocument('unwise', 'inclusive');






classifier.train();

console.log(classifier.classify('hey guys let\'s grab lunch'));
console.log(classifier.classify('i have a browbag at 12 '));
console.log(classifier.classify('hey yall lets grab lunch'));

console.log(classifier.classify('that salesman was retarded'));
console.log(classifier.classify('that salesman was unwise'));
console.log(classifier.classify('that salesperson was retarded'));
console.log(classifier.classify('that sales person was unwise'));








// That salesman is lowkey retarded

// He has OCD he was cleaning like he was on crack

// African americans and blacks have fire cuisine

// Push your code to the master branch
