import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import styles from './NewwArrivals.style'
import ProductCardView from './ProductCardView'

const NewArrivals = () => {
    const products = [1,2,3,4]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>new arrivals</Text>
        <Ionicons name='grid' size={25} color={"#2A4D50"}/>
      </View>
      <FlatList
        data={products}
        renderItem={({item: items}) => (<ProductCardView item={items}/>)}
        horizontal
        contentContainerStyle={{columnGap: 10}}
      />
    </View>
  )
}

export default NewArrivals