import { SAMPLE_ACTION_TYPE } from '../actions/index'

const rootReducer = (state, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return state
    default:
      return state
  }
}

export default rootReducer
