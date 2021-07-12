import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { playerReducer } from './playerReducer';
import { songReducer } from './songReducer';

export const rootReducer = combineReducers({
  player: playerReducer,
  song: songReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};