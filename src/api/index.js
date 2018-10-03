import axios from 'axios'

const BASE_URL = 'https://uinames.com'
const URL = '/api/?ext&amount=25&region=spain'

export function configureAxios() {
  console.log ('configurado')
  axios.defaults.baseURL = BASE_URL
}

export function fetchPeople() {
  return axios.get(URL)
}