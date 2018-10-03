import React, { Component } from 'react'
import { View, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class People extends Component {
  
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