import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import styles from './ProductDetail.style'


const ProductDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back-circle-sharp' size={35}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name='heart-outline' size={35} color={"#2A4D50"}/>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: 'https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg'}}
        style={styles.imgCover}
      />
      <View style={styles.details}>
        
      </View>
    </SafeAreaView>
  )
}

export default ProductDetail

