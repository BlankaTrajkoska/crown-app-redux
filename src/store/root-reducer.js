//a method that allows us to combine one reducer, by combining all the reducers
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  //nameOfReducerSlice: the ActualReducerFunction
  user: userReducer,
});
