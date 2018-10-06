import React, { Component } from 'react'
import { Scene, Stack, Router } from 'react-native-router-flux'

import { People, Person } from '../components/sections/'
import * as api from '../api/'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../redux'

const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

export default class App extends Component {
  
  componentWillMount() {
    api.configureAxios()
  }

  render() {
    return (
      <Provider store={store}>
        <Router navigationBarStyle={{ backgroundColor: '#98A99A'}} headerTintColor={'black'}>
          <Stack key="root">
            <Scene key="people" component={People} title="LIST OF CANDIDATES" initial={true}/>
            <Scene key="person" component={Person} title="DETAIL" titleStyle={'white'}/>
          </Stack>
        </Router>
      </Provider>
    )
  }
}