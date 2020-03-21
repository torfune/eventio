import formatDate from './formatDate'

const testCases = ['2020-03-19T13:00:00.000Z', '2002-10-20T00:00:00.000Z']

const isNumber = (stringNumber: string) => {
  return !isNaN(Number(stringNumber))
}

const testCorrectDateFormat = (formattedDate: string) => {
  expect(formattedDate).toContain(' - ')

  const [date, timeAndPeriod] = formattedDate.split(' - ')
  expect(date).toContain(',')
  expect(timeAndPeriod).toContain(' ')

  const [month, day, year] = date.replace(',', '').split(' ')
  expect(month).toBeTruthy()
  expect(isNumber(day)).toBe(true)
  expect(isNumber(year)).toBe(true)

  const [time, period] = timeAndPeriod.split(' ')
  expect(['AM', 'PM']).toContain(period)

  const [hour, minute] = time.split(':')
  expect(isNumber(hour)).toBe(true)
  expect(isNumber(minute)).toBe(true)
}

for (const testCase of testCases) {
  test(`format date string: ${testCase}`, () => {
    testCorrectDateFormat(formatDate(testCase))
  })
}
