import React, { Component } from 'react'
import { View, Button, Text, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

import * as api from '../../../api/'

export default class People extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numError: 0,
      peopleList: [],
    }
  }
  
  componentWillMount() {
    api.fetchPeople().then (res => {
      this.setState({ peopleList: res.data })
    }).catch (err => {
      if (this.state.numError < 3) {
        this.setState({ numError: this.state.numError + 1 })
        console.log ('Error number ', this.state.numError)
        this.componentWillMount()
      } else {
        console.log('fetchPeople error ', err)
      }
    })
  }

  _renderItem ({item, index}) {
    console.log(item.name)
    return (
      <View style={styles.mainCell}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    console.log (this.state.peopleList)
    return (
      <View style ={styles.mainView}>
        <Button  
          title={'Pulsa'}
          color={'white'}
          style={{ alignItems:'center' }}
          onPress={ () => Actions.person()}
        />
        <FlatList
          data = {this.state.peopleList}
          renderItem = { value => this._renderItem(value)}
          keyExtractor = { (v, i) => 'ip ' + i}
        />
      </View>
    )
  }
}