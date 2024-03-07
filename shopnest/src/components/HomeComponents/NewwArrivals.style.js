import { StyleSheet } from "react-native" 
import { COLORS, SIZES,  } from '../../../assets/constants/theme'

const styles = StyleSheet.create({
    container : {
        marginVertical: 20
    },
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    headText : {
        fontWeight: '700',
        fontSize: 20,
        color: COLORS.primary
    }
})

export default styles