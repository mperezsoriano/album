import React, { Component } from 'react'
import { Scene, Stack, Router } from 'react-native-router-flux'

import { People, Person } from '../components/sections/'
import * as api from '../api/'

export default class App extends Component {
  
  componentWillMount() {
    api.configureAxios()
  }

  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#98A99A' }}>
        <Stack key="root">
          <Scene key="people" component={People} title="LIST OF CANDIDATES" initial={true}/>
          <Scene key="person" component={Person} title="Detail of person"/>
        </Stack>
      </Router>
    )
  }
}