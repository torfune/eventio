import EventItem from '../api/types/EventItem'
import EventItemCategory from '../types/EventItemCategory'

const filterEventItems = (events: EventItem[], category: EventItemCategory) => {
  if (category === 'all') return events

  const currentDate = new Date()

  return events.filter(event => {
    const startDate = new Date(event.startsAt)
    return category === 'past'
      ? startDate <= currentDate
      : startDate >= currentDate
  })
}

export default filterEventItems
