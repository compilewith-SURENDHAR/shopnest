import { View, Text, Image } from 'react-native'
import React from 'react'



const TrendingCards = () => {

    const slides = [
      'https://images.app.goo.gl/76ZGEt8FK19jn2gi8',
      'https://images.app.goo.gl/cGp76jHNA1HwzHTMA',
      'https://images.app.goo.gl/uM8nKr8AT1LHSUYQA'
    ];

  return (
    <View>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-dVtRimy2mMJfSMW7T03aqKwlbZKxmCT6yx1yWFQ4tC_EoNRUDkkbhgcDGvwvrRavXw&usqp=CAU.jpg'}} 
        style={{height: 200, width: 'auto', borderRadius: 15}}
      />
    </View>
  )
}

export default TrendingCards