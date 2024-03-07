import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import styles from './Home.style'
import { COLORS } from '../../assets/constants/theme'
import Welcome from '../components/HomeComponents/Welcome'
import TrendingCards from '../components/HomeComponents/TrendingCards'
import NewArrivals from '../components/HomeComponents/NewArrivals'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Ionicons name='location' color={COLORS.primary} size={25}/>
          <Text style={styles.city}>chennai</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name='menu' size={25}/>
          </TouchableOpacity>
        </View>
      </View>
      <Welcome/>
      <TrendingCards/>
      <NewArrivals/>
    </SafeAreaView>
  )
}

export default Home
