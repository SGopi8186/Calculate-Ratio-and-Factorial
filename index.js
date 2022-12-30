let ratio = require("../ratio/index.js");
let factorial = require("../factorial/index.js");

let ratioAndFactorial = (num1, num2, num3) => {
  const d = ratio(num1, num2);
  const e = factorial(num3);

  return { d, e };
};
module.exports = ratioAndFactorial;
