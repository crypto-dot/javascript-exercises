const fibonacci = function(num) {
    if(num <= 0){
        return "OOPS";
    }
    let result = 1;
    let prevResult = 0;

    for(let i = 1; i < num; i++){
        let temp  = result;
        result += prevResult;
        prevResult = temp;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
