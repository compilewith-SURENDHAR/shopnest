import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Searchbar.style'
import { Ionicons } from "@expo/vector-icons"

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchinput}>ff</TextInput>
      <TouchableOpacity>
        <Ionicons name='search' size={34} color={ "#DDF0FF"} style={styles.searchicon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Searchbar