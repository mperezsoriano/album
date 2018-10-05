import * as types from './types'
import * as api from '../../api'

function setFetching(value) {
  return {
    type: types.PEOPLE_SET_FETCHING,
    value: value
  }
}

function setList(value) {
  return {
    type: types.PEOPLE_UPDATE_LIST,
    value: value
  }
}

function setItem(value) {
  return {
    type: types.PEOPLE_SET_ITEMSELECTED,
    value: value
  }
}

export function fetchPeopleList() {
  return (dispatch, getState) => {
    dispatch(setFetching(true))
    api
      .fetchPeople()
      .then (res => {
        dispatch(setFetching(false))
        dispatch(setList(res.data))
      })
      .catch (err => {
        dispatch(setFetching(false))
        console.log ("error", err)
      })
  }
}