import React from 'react'
import {Provider} from 'react-redux'
import store from './store/index'
import App from './App'

export default class AppContainer extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}
