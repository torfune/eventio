import validateTime from './validateTime'

const testCases = [
  ['22:30', true],
  ['03:00', true],
  ['abrakadabra', false],
  ['20:aa', false],
  ['30:10', false],
  ['10', false],
]

for (const [input, result] of testCases) {
  test(`${input} is ${result ? 'valid' : 'invalid'} date`, () => {
    expect(validateTime(input as string)).toBe(result)
  })
}
