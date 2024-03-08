import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-dVtRimy2mMJfSMW7T03aqKwlbZKxmCT6yx1yWFQ4tC_EoNRUDkkbhgcDGvwvrRavXw&usqp=CAU.jpg"}}
            style={styles.productImg}
          />
        </View>
        <View>
          <Text style={styles.title} numberOfLines={1}>hellohelloheldeelooe {item}</Text>
          <Text style={styles.description}>description</Text>
          <View style={styles.bottom}>
          <Text style={styles.price}>$100</Text>
          <TouchableOpacity>
            <Ionicons name='add-circle' size={35} color={"#2A4D50"}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create(
  {
    container : {
      height: 205,
      width: 170,
      borderWidth: 1.5,
      borderRadius: 15,
      borderColor : "#2A4D50",
      backgroundColor: "#DDF0FF",
      padding: 3
    },
    title : {
      padding: 5,
      fontSize: 18,
      fontWeight: '800'
    },
    description : {
      paddingHorizontal: 5,
      fontSize: 15,
      fontWeight: '500'
    },
    productImg : {
      height: 100,
      //padding: 5
    },
    price : {
      padding: 5,
      fontSize: 16,
      fontWeight: '900',
      color: "#2A4D50"
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
)