import { ACTION_TYPES } from "../constants/actionTypes"

const countState = {
  initialNumber: 1
}

const countReducer = (state = countState, action) => { 
  if (action.type === ACTION_TYPES.INCREMENT) { 
    //tăng initialNumber state lên 1
    return {
      ...state,
      initialNumber: state.initialNumber + action.payload
    }
  }

  if (action.type === ACTION_TYPES.DECREMENT) { 
    return {
      ...state,
      initialNumber: state.initialNumber - action.payload
    }
  }

  return state
}

export default countReducer