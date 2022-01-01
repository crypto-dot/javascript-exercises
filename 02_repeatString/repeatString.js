const repeatString = function(string, n) {
    let str = "";
    if(n < 0) {
        return "ERROR";
    }
    for(let i = 0; i < n; i++){
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
