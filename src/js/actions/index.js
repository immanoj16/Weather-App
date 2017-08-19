import axios from 'axios'

import { FETCH_WEATHER } from '../reducers/WeatherReducer'

const API_KEY = 'c3f72ab90e8be3c83dc441e0ffd2cd2b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`



export const fetchWeather = (city) => {

  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}