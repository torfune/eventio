const validateDate = (dateString: string) => {
  const parts = dateString.split('-').filter(part => !!part)
  if (parts.length !== 3) return false

  const [year, month, day] = parts.map(part => Number(part))

  if (isNaN(year) || year < 1970 || year > 2100) return false
  if (isNaN(month) || month < 1 || month > 12) return false
  if (isNaN(day) || day < 1 || day > 31) return false

  return true
}

export default validateDate
