import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { reducer, RootState } from './reducers';

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState, AnyAction>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>