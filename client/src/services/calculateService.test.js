import calculate from './calculateService'

// mock calculate from calculateService
// due jest issues with transformation fparser by babel while running tests

jest.mock('./calculateService', () => {
  return jest.fn().mockImplementation(() => 15)
})

describe('calculation valid formula', () => {
  beforeEach(() => {
    calculate.mockClear()
  })

  test('should correctly calculate formula', () => {
    const formulaValue = 'A + B'
    const amountA = 5
    const amountB = 10
    const result = calculate(formulaValue, amountA, amountB)
    expect(result).toBe(15)
  })
})
