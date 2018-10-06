import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import styles from './styles'
import { PeopleCell } from '../../widgets/'
import  { connect } from 'react-redux'
import * as PeopleActions from '../../../redux/People/actions'
import { Actions } from 'react-native-router-flux'

class People extends Component {

  componentWillMount() {
    this.props.fetchPeopleList()
  }

  _renderItem ({ item }) {
    return (
      <PeopleCell item = {item} onPress= { () => {
        this.props.setItemCell(item)
      }} />
    )
  }

  _renderContent() {
    if (this.props.isFetching) {
      return (
        <View style = {styles.mainActivityIndicator}>
          <ActivityIndicator size="large" color={"black"} animating={this.props.isFetching} />
        </View>
      )
    } else {
      return (
        <FlatList
        data = {this.props.list}
        renderItem = { value => this._renderItem(value)}
        keyExtractor = { (v, i) => 'ip ' + i}
        extraData = {this.props}
      />
      )
    }
  }

  render() {   
    return (
      <View style = {styles.mainView}>
        { this._renderContent() }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.people.isFetching,
    list: state.people.list,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchPeopleList: () => {
      dispatch(PeopleActions.fetchPeopleList())
    },
    setItemCell: (item) => {
      dispatch(PeopleActions.setItem(item))
      Actions.person()
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(People)