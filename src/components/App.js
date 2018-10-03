import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions, Scene, Stack, Router } from 'react-native-router-flux'

import { People, Person} from '../components/sections/'

export default class App extends Component {
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