import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {UserReducer} from 'modules/user/User.state';

const reducers = combineReducers({
  user: UserReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [],
});
