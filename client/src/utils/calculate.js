import Formula from 'fparser'

export default function calculate(formulaValue, totalAmountA, totalAmountB) {
  try {
    const formula = new Formula(formulaValue)

    return formula.evaluate({
      A: totalAmountA,
      B: totalAmountB,
    })
  } catch (e) {
    return 0
  }
}
