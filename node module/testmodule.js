let petName = "max"
module.exports.name = function() {
    return "Humam";
};
module.exports.age = function() {
    return "29 (really)";
};
module.exports.setPetName = function(inComing) {
    petName = inComing;
    }

    module.exports.getPetName = function() {
        appendPetName();
        return petName;
        }

        /** private **/
function appendPetName(){
    petName = petName +"****";
  }