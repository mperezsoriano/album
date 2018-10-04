import * as types from './types'

const initialState = {
  isFetching: false,
  list: [],
  itemSelected: null
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.PEOPLE_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value
      }
    case types.PEOPLE_UPDATE_LIST:
      return {
        ...state,
        isFetching: action.value
      }
    case types.PEOPLE_SET_ITEMSELECTED:
      return {
        ...state,
        isFetching: action.value
      }
    default:
      return {
        state
      }
  }
}