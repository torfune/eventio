import User from './types/User'
import { axios } from '.'

export default {
  async signIn(email: string, password: string) {
    const response = await axios.post(`/auth/native`, { email, password })
    return {
      user: response.data as User,
      accessToken: response.headers['authorization'] as string,
      refreshToken: response.headers['refresh-token'] as string,
    }
  },

  async signInRefresh(refreshToken: string) {
    const response = await axios.post(`/auth/native`, { refreshToken })
    return {
      user: response.data as User,
      accessToken: response.headers['authorization'] as string,
    }
  },
}
