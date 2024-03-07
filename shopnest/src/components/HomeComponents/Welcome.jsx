import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../components/HomeComponents/Welcome.style'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome user,</Text>
      <Text style={styles.subtitle}>Shopnest - make shopping easy</Text>
    </View>
  )
}

export default Welcome