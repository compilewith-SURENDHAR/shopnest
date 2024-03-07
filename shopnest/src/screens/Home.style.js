import { StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES,  } from '../../assets/constants/theme'


const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: SIZES.medium,
        marginTop: 30,
        marginHorizontal: SIZES.xSmall
    },
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    location : {
        flexDirection: 'row'
    },
    city : {
        marginLeft: 10,
        fontSize: SIZES.large,
        marginBottom: 9,
    },
})

export default styles;