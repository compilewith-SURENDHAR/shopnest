import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Searchbar from '../components/SearchComponents/Searchbar'
import { SIZES } from '../../assets/constants/theme'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar/>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container : {
    margin: SIZES.medium,
    marginTop: SIZES.xLarge+5
  }
})
