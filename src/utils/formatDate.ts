const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const formatDate = (isoString: string) => {
  const date = new Date(isoString)

  const month = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return `${month} ${day}, ${year} - ${time}`
}

export default formatDate
