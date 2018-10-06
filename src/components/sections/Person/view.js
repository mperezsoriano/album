import React, {Component} from 'react'
import { View } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

import { PersonCell } from '../../widgets/'

class Person extends Component {

  render() {
    console.log('   -    ', this.props.personSelected)
    return (
      <View style={styles.mainView}>
        <PersonCell person = {this.props.personSelected}></PersonCell>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personSelected: state.people.itemSelected
  }
}

export default connect(mapStateToProps, null)(Person)