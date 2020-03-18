import User from './User'

interface EventItem {
  id: string
  title: string
  description: string
  startsAt: string
  capacity: number
  owner: User
  attendees: User[]
  updatedAt: string
  createdAt: string
}

export default EventItem
