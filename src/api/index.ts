import Axios from 'axios'
import { API_URL, API_KEY } from '../config'
import User from './types/User'
import EventItem from './types/EventItem'
import CreateEventData from '../types/CreateEventData'

class Api {
  static async signIn(email: string, password: string) {
    const response = await Axios.post(
      `${API_URL}/auth/native`,
      { email, password },
      {
        headers: { APIKey: API_KEY },
      }
    )

    return {
      user: response.data as User,
      accessToken: response.headers['authorization'] as string,
      refreshToken: response.headers['refresh-token'] as string,
    }
  }

  static async signInRefresh(refreshToken: string) {
    const response = await Axios.post(
      `${API_URL}/auth/native`,
      { refreshToken },
      {
        headers: { APIKey: API_KEY },
      }
    )

    return {
      user: response.data as User,
      accessToken: response.headers['authorization'] as string,
    }
  }

  static async getAllEventItems() {
    const response = await Axios.get(`${API_URL}/events`, {
      headers: { APIKey: API_KEY },
    })

    return response.data as EventItem[]
  }

  static async createEvent(data: CreateEventData, accessToken: string) {
    const response = await Axios.post(`${API_URL}/events`, data, {
      headers: { APIKey: API_KEY, Authorization: accessToken },
    })

    return response.data as EventItem
  }

  static async joinEvent(eventId: string, accessToken: string) {
    const response = await Axios.post(
      `${API_URL}/events/${eventId}/attendees/me`,
      {},
      {
        headers: { APIKey: API_KEY, Authorization: accessToken },
      }
    )

    return response.data as EventItem
  }

  static async leaveEvent(eventId: string, accessToken: string) {
    const response = await Axios.delete(
      `${API_URL}/events/${eventId}/attendees/me`,
      {
        headers: { APIKey: API_KEY, Authorization: accessToken },
      }
    )

    return response.data as EventItem
  }
}

export default Api
