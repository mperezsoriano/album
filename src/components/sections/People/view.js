import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import { PeopleCell } from '../../widgets/'
import  { connect } from 'react-redux'
import * as PeopleActions from '../../../redux/People/actions'

class People extends Component {

  componentWillMount() {
    this.props.fetchPeopleList()
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
    console.log(this.props.isFetching)
    return (
      <View style ={styles.mainView}>
        <FlatList
          data = {this.props.list}
          renderItem = { value => this._renderItem(value)}
          keyExtractor = { (v, i) => 'ip ' + i}
          extraData = {this.state}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.people.isFetching,
    list: state.people.list
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchPeopleList: () => {
      dispatch(PeopleActions.fetchPeopleList())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(People)