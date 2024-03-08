import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container : {
        marginTop : 23,
        margin: 8
    },
    header : {
        flexDirection: 'row',
        //position: 'relative',
        //zIndex: 999,
        justifyContent: 'space-between',
        //alignItems: 'center'
    },
    imgCover : {
        resizeMode : 'cover',
        aspectRatio: 1,
        borderRadius: 15
    },
    details : {
        borderRadius: 15
    }
})

export default styles