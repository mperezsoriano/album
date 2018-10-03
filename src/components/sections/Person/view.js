import React, {Component} from 'react'
import { View } from 'react-native'
import styles from './styles'

export default class Person extends Component {
  render () {
    console.log(this.props.person)
    return (
      <View style = {styles.view}>
      </View>
    )
  }
}