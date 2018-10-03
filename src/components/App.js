import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions, Scene, Stack, Router } from 'react-native-router-flux'

import { People, Person } from '../components/sections/'
import * as api from '../api/'

export default class App extends Component {
  
  componentWillMount() {
    api.configureAxios()

  }

  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key="people" component={People} title="List of candidates" initial={true}/>
          <Scene key="person" component={Person} title="Detail of person"/>
        </Stack>
      </Router>
    )
  }
}