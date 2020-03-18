import Axios from 'axios'
import { API_URL, API_KEY } from '../config'
import User from './types/User'
import EventItem from './types/EventItem'

class Api {
  static async signIn(email: string, password: string): Promise<User> {
    const { data: user } = await Axios.post(
      `${API_URL}/auth/native`,
      { email, password },
      {
        headers: { APIKey: API_KEY },
      }
    )
    return user
  }

  static async getAllEventItems(): Promise<EventItem[]> {
    const { data: eventItems } = await Axios.get(`${API_URL}/events`, {
      headers: { APIKey: API_KEY },
    })
    return eventItems
  }
}

export default Api
