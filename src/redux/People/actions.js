import * as types from './types'

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

export function setItem(value) {
  return {
    type: types.PEOPLE_SET_ITEMSELECTED,
    value: value
  }
}

export function fetchPeopleList(numberofCandidates) {
  return (dispatch, getState, api) => {
    dispatch(setFetching(true))
    api
      .fetchPeople(numberofCandidates)
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