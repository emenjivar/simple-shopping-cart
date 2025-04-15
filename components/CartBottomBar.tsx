import { StyleSheet, Text, View, ViewStyle } from "react-native"

type Props = {
    style?: ViewStyle,
    quantity: number
}

export default function CartBottomBar({ quantity, style }: Props) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>Items added to cart: {quantity}</Text>
            <Text style={styles.link}>Go to cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black', 
        paddingHorizontal: 20  ,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40,
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 15
    }
})