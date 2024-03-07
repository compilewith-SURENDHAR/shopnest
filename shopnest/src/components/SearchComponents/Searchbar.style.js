import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../assets/constants/theme'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //margin: SIZES.xSmall,
    },
    searchinput : {
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: COLORS.secondary,
        fontSize: SIZES.large,
        padding: SIZES.small,
    },
    searchicon: {
        backgroundColor: "#2A4D50",
        height: 50,
        width: 50,
        textAlign: 'center',
        borderRadius: 10,
        paddingTop: 7
    }
})

export default styles