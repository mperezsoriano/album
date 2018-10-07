import * as types from './types'

const initialState = {
  numberCandidates: 100
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.INITIAL_SET_NUMBERCANDIDATES:
    return {
      ...state,
      numberCandidates: action.value
    }
    default:
      return {
        state
      }
  }
}