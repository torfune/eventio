import validateDate from './validateDate'

const testCases = [
  ['2020-03-20', true],
  ['2020-10-30', true],
  ['abrakadabra', false],
  ['2020-aa-10', false],
  ['2020-11', false],
  ['2020-30-01', false],
  ['10-10-2021', false],
]

for (const [input, result] of testCases) {
  test(`${input} is ${result ? 'valid' : 'invalid'} time`, () => {
    expect(validateDate(input as string)).toBe(result)
  })
}
