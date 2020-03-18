import Axios from 'axios'
import { API_URL, API_KEY } from '../config'
import User from './types/User'
import EventItem from './types/EventItem'

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

  static async getAllEventItems(): Promise<EventItem[]> {
    const { data: eventItems } = await Axios.get(`${API_URL}/events`, {
      headers: { APIKey: API_KEY },
    })
    return eventItems
  }
}

export default Api
