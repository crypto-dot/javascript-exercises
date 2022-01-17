const add = function(num1,num2) {
    return num1 + num2;
};

const subtract = function(num1,num2) {
    return num1 - num2;
};

const sum = function(array) {
    result = 0;
    for(let i = 0; i < array.length; i++){
      result += array[i];
    }
    return result;
};

const multiply = function(array) {
    result = array[0];
    for(let i = 1; i < array.length; i++){
      result *= array[i];
    }

    return result;
};  

const power = function(num, power) {
    result = 1;
    for(let i = 0; i < power;i++){
      result *= num;
    }
    return result;
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  }
  else {
    num = num * factorial(num-1);
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
