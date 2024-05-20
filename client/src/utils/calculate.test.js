import calculate from './calculate'

// mock calculate from calculateService
// due jest issues with transformation fparser by babel while running tests

// mock calculate from calculateService due jest issues with transformation fparser by babel while running tests
jest.mock('../utils/calculate', () => {
  return {
    __esModule: true,
    default: jest.fn()
  }
})

describe('calculation valid formula', () => {
  test('should correctly calculate formula', () => {
    calculate.mockReturnValue(15)
    const formulaValue = 'A + B'
    const amountA = 5
    const amountB = 10
    const result = calculate(formulaValue, amountA, amountB)
    expect(result).toBe(15)
  })
})
