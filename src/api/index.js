import axios from 'axios'

const BASE_URL = 'https://uinames.com'
const URL = '/api/?ext&amount=25&region=United States'

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL
}

export function fetchPeople() {
  return axios.get(URL)
}