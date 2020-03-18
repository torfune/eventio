import EventItem from '../api/types/EventItem'
import { ButtonColor } from '../components/Button'

interface ButtonConfig {
  text: string
  color: ButtonColor
}

const getEventButtonConfig = (
  { owner, attendees }: EventItem,
  userId: string
): ButtonConfig => {
  // User owns Event
  if (owner.id === userId) {
    return {
      text: 'EDIT',
      color: 'grey',
    }
  }

  // User attends Event
  if (attendees.find(attendee => attendee.id === userId)) {
    return {
      text: 'LEAVE',
      color: 'red',
    }
  }

  // User can join Event
  return {
    text: 'JOIN',
    color: 'green',
  }
}

export default getEventButtonConfig
