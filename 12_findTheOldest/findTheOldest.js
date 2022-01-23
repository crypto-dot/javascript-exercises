const findTheOldest = function(persons) {
    let oldPerson = {name: "Nan", age: 0};
    persons.forEach(person => {
        let personAge;
        if(person["yearOfDeath"] == undefined){
            personAge = (new Date().getFullYear()) - person["yearOfBirth"];
        }
        else {
            personAge = person["yearOfDeath"] - person["yearOfBirth"];
        }
        if(oldPerson["age"] < personAge){
            oldPerson["name"] = person["name"];
            oldPerson["age"] = personAge;
        }
    });
    return oldPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
