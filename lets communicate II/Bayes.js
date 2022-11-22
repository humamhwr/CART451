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


classifier.save('triggerwords.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
});

natural.BayesClassifier.load('triggerwords.json', null, function(err, classifier) {
    console.log(classifier.classify('i am blacklisted from the airport'));
    console.log(classifier.classify('this was a man made lake'));
    console.log(classifier.classify('we all have equal rights'));

});

natural.BayesClassifier.load('triggerwords.json', null, function(err, classifier) {

    document.getElementById("field").innerHTML = "guys";
    function isJson() {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
    
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }
    
        if (typeof item === "object" && item !== null) {
            return true;
        }
    
        return false;
    }
});