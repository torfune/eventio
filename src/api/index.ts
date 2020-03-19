import authApi from './authApi'
import eventsApi from './eventsApi'
import Axios from 'axios'
import { API_URL, API_KEY } from '../config'

export const axios = Axios.create({
  baseURL: API_URL,
  headers: { APIKey: API_KEY },
})

const Api = {
  auth: authApi,
  events: eventsApi,
}

export default Api
