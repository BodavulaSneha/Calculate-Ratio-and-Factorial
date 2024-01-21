const factorialw = require('../factorial/index.js')
const ratiow = require('../ratio/index.js')
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratiow(num1, num2)
  const factorial = factorialw(num3)

  return {ratio, factorial}
}
module.exports = ratioAndFactorial
