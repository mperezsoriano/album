import React, {Component} from 'react'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

import { PersonCell } from '../../widgets/'

export default class Initial extends Component {

  constructor(props) {
    super (props)
    this.state = {
      numberCandidates: 100,
      n: 0
    }
  }

  _conversionToNumber = (value) => {
    console.log(value)
    if ((value)) {

    } else {

    }
  }

  render() {
    console.log(this.state.numberCandidates)
    return (
      <View style={styles.mainView}>
        <Image style={styles.imageLogo} resizeMode= { 'contain' } source={ require('../../../resources/logo.png')} />
        <Text style={styles.askText}>Number of candidates?</Text>
        <TextInput
          style={styles.textInput}
          //onChangeText={ numberCandidates => this.setState({numberCandidates}) }
          onChangeText= { this._conversionToNumber }
          //value={ this.state. }
          placeholder='100'
          maxLength = {3}
          keyboardType = 'numeric'
        />
        <TouchableOpacity style={styles.textInputOk}>
          <Text style={styles.textInputOkText}>Click to view the list</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
/*
const mapStateToProps = (state) => {
  return {
    personSelected: state.people.itemSelected
  }
}

export default connect(mapStateToProps, null)(Initial)
*/