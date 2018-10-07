import axios from 'axios'

const BASE_URL = 'https://uinames.com'
const URL = '/api/?ext&region=United States&amount='

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL
}

export function fetchPeople(numberOfCandidates) {
  const number = numberOfCandidates ? numberOfCandidates : 25
  return axios.get(URL+number)
}