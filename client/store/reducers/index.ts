import { combineReducers } from "redux";
import {HYDRATE} from 'next-redux-wrapper';

import { playerReducer } from "./playerReducer";

export const rootReducer = combineReducers({
  player: playerReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.count) nextState.count = state.count
    return nextState
  } else {
    return rootReducer(state, action)
  }
}