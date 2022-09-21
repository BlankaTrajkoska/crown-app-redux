import { compose, createStore, applyMiddleware } from "redux";
//a logger allowes us to see wht the state looks like before and at despatch, what the action is and how the state looks after the action
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//middleWares are library helpers that run before an action hits the reducer.whenever we dispatch an action, before the action hits the reducers it hits the middlewaare
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
//anothe step for the middleWares
const composedEnhancers = compose(applyMiddleware(...middleWares));

//creating the store
export const store = createStore(rootReducer, undefined, composedEnhancers);
