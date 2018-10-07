import * as types from './types'

export function setNumberCandidates(value) {
  return {
    type: types.INITIAL_SET_NUMBERCANDIDATES,
    value: value
  }
}