import React, { Component } from 'react'
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

import * as api from '../../../api/'
import { PeopleCell } from '../../widgets/'

export default class People extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numError: 0,
      peopleList: [],
      cellSelected: null
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

  _onCellTapped(item) {
    console.log ('Press in cell', item)
    this.setState({ cellSelected: item })
    //Actions.person(person= this.state.cellSelected)
  }

  _renderItem ({ item }) {
    return (
      <PeopleCell item={item} onPress= { () => this._onCellTapped(item) } />
    )
  }

  render() {
    return (
      <View style ={styles.mainView}>
        <FlatList
          data = {this.state.peopleList}
          renderItem = { value => this._renderItem(value)}
          keyExtractor = { (v, i) => 'ip ' + i}
          extraData = {this.state.selected}
        />
      </View>
    )
  }
}