import createDate from './createDate'

test(`create Date object`, () => {
  const date = createDate('2020-03-19', '20:00')
  expect(date instanceof Date).toBe(true)
})
