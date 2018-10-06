import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

export default class PersonCell extends Component {
  render() {
    const { name, surname, email, birthday, region, phone, photo } = this.props.person
    const { number, expiration, pin, secutity } = this.props.person.credit_card
    return (
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.h1Text}>Personal Information</Text>
        </View>
        <View style={styles.personalView}>
          <View style={styles.imageView}>
            <Image style={styles.personalImage} source={{uri: photo}} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.h2Text}>Name: {name}</Text>
            <Text style={styles.h2Text}>Surname: {surname}</Text>
            <Text style={styles.h2Text}>Birthday: {birthday.dmy}</Text>
            <Text style={styles.h2Text}>Region: {region}</Text>
            <Text style={styles.h2Text}>Phone: {phone}</Text>
            <Text style={styles.h3Text}>{email}</Text>
          </View>
        </View> 
        <Image style={styles.credirCardImage} resizeMode= { 'contain' } source={ require('../../../resources/tarjeta.png')} />
        <View style={styles.titleView}>
          <Text style={styles.h1Text}>Credit Card Information</Text>
        </View>
        <View style={styles.creditCardView}>
          <Text style={styles.h2TextCard}>{number}</Text>
          <Text style={styles.h3TextCard}>VALID: {expiration}</Text>
          <Text style={styles.h3TextCard}>{name} {surname}</Text>
        </View>
      </View>
    )
  }
}