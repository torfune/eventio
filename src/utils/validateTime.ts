const validateTime = (timeString: string) => {
  const parts = timeString.split(':')
  if (parts.length !== 2) return false

  const [hour, minute] = parts.map(part => Number(part))

  if (isNaN(hour) || hour < 0 || hour > 23) return false
  if (isNaN(minute) || minute < 0 || minute > 59) return false

  return true
}

export default validateTime
