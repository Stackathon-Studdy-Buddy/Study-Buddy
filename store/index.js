import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import meetings from './meetings'
import mymeetings from './mymeeting'
const reducer = combineReducers({
  user,
  meetings,
  mymeetings
})

const middleware = composeWithDevTools(
  // applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, middleware)

export default store
