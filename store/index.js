import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from './../reducer';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () =>
  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
