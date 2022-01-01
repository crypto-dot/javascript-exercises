const ftoc = function(fahrenheit) {
  let num = ((fahrenheit + 40) / 1.8) - 40;
  return Number(num.toFixed(1));
};

const ctof = function(celsius) {
  let num = ((celsius + 40) * 1.8) - 40;
  return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
