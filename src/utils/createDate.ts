const createDate = (date: string, time: string) => {
  const [year, month, day] = date.split('-').map(item => Number(item))
  const [hour, minute] = time.split(':').map(item => Number(item))

  return new Date(year, month - 1, day, hour, minute)
}

export default createDate
