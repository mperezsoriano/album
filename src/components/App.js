import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      fondo: 'red',
    }
  }

  componentDidMount() {
    this.setState({ fondo: 'grey' })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.state.fondo }}>
      </View>
    )
  }
}