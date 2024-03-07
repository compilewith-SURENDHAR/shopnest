import { StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from '../../../assets/constants/theme'


const styles = StyleSheet.create({
   container: {
    margin: SIZES.xSmall,
   },
   welcome : {
    fontSize: SIZES.xxLarge,
    fontWeight : '700'
   },
   subtitle : {
    fontSize: SIZES.medium,
    marginLeft: 5,
    color: COLORS.primary
   } 
})

export default styles