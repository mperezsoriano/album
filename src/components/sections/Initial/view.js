import React, {Component} from 'react'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as InitialActions from '../../../redux/Initial/actions'
import { Actions } from 'react-native-router-flux'
import { people } from '../../../redux';

class Initial extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      numberTextInput: '100'
    }
  }

   _pressClick = () => {
    this.props.setNumberCandidates(parseInt(this.state.numberTextInput))
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Image style={styles.imageLogo} resizeMode= { 'contain' } source={ require('../../../resources/logo.png')} />
        <Text style={styles.askText}>Number of candidates?</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.numberTextInput}
          onChangeText={ numberTextInput => this.setState({ numberTextInput }) } 
          placeholder= '100'
          maxLength = {3}
          keyboardType = 'numeric'
        />
        <TouchableOpacity style={styles.textInputOk} onPress={this._pressClick}>
          <Text style={styles.textInputOkText}>Click to view the list</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numberCandidates: state.initial.numberCandidates  
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setNumberCandidates: (value) => {
      dispatch(InitialActions.setNumberCandidates(value))
      Actions.people({type: 'reset'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Initial)