import EventItem from '../api/types/EventItem'
import { ButtonColor } from '../components/Button'

interface ButtonConfig {
  text: string
  color: ButtonColor
  action: 'join' | 'leave' | 'edit'
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
      action: 'edit',
    }
  }

  // User attends Event
  if (attendees.find(attendee => attendee.id === userId)) {
    return {
      text: 'LEAVE',
      color: 'red',
      action: 'leave',
    }
  }

  // User can join Event
  return {
    text: 'JOIN',
    color: 'green',
    action: 'join',
  }
}

export default getEventButtonConfig
