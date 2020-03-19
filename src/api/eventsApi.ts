import EventItem from './types/EventItem'
import CreateEventData from '../types/CreateEventData'
import { axios } from '.'

export default {
  async getAll() {
    const response = await axios.get(`/events`)
    return response.data as EventItem[]
  },

  async create(data: CreateEventData, accessToken: string) {
    const response = await axios.post(`/events`, data, {
      headers: { Authorization: accessToken },
    })
    return response.data as EventItem
  },

  async join(eventId: string, accessToken: string) {
    const response = await axios.post(
      `/events/${eventId}/attendees/me`,
      {},
      {
        headers: { Authorization: accessToken },
      }
    )
    return response.data as EventItem
  },

  async leave(eventId: string, accessToken: string) {
    const response = await axios.delete(`/events/${eventId}/attendees/me`, {
      headers: { Authorization: accessToken },
    })
    return response.data as EventItem
  },
}
