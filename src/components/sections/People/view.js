import React, { Component } from 'react'
import { View, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

import * as api from '../../../api/'

export default class People extends Component {

  
  
  componentWillMount() {
    api.fetchPeople().then (res => {
      console.log(res.data)
    }).catch (err => {
      console.log('fetchPeople error', err)
    })
  }

  render() {
    return (
      <View style ={styles.view}>
        <Button  
          title={'Pulsa'}
          color={'white'}
          style={{ alignItems:'center' }}
          onPress={ () => Actions.person()}
        />
      </View>
    )
  }
}