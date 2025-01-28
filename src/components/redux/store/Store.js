import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { reducer } from '../reducers/Redux';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;


// const reducers = combineReducers({
//     reducer: reducer,
// })


export const store = createStore(reducer, applyMiddleware(thunk));
