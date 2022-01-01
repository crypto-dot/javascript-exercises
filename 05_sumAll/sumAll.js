const sumAll = function(startInt, endInt) {
    let sum = 0;
    if(startInt < 0 || endInt < 0 || typeof(startInt) !== "number" || typeof(endInt) !== "number"){
        return "ERROR";
    }
    if(startInt > endInt){
        let temp = endInt;
        endInt = startInt;
        startInt = temp;
    }
    for(let i = startInt; i <= endInt; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
