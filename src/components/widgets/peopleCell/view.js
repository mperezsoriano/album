import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, Animated } from 'react-native'

import styles from './styles'

export default class PeopleCell extends Component {

  static defaultProps = {
    onPress: () => {},
    selected: null
  }

  render () {
    const { name, surname, photo } = this.props.item
    return (
      <TouchableOpacity style={styles.mainCell} onPress={this.props.onPress}>
        <Image
          style={styles.imageCell}
          source={{uri: photo}}
        />
        <Text 
          style={styles.textCell}>
          {name} {surname}
        </Text>
      </TouchableOpacity>
    )
  }
}