import { StyleSheet } from "react-native" 
import { COLORS, SIZES,  } from '../../../assets/constants/theme'

const styles = StyleSheet.create({
    container : {
        marginVertical: 20
    },
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 20
    },
    headText : {
        fontWeight: '800',
        fontSize: 25,
        color: COLORS.primary
    }
})

export default styles