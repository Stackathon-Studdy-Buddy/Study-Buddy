import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import meetings from './meetings'
const reducer = combineReducers({
  user,
  meetings
})

const middleware = composeWithDevTools(

  applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, middleware)

export default store
