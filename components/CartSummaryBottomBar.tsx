import { StyleSheet, View, ViewStyle, Text } from "react-native"

type Props = {
    quantity: number,
    totalPrice: number,
    style?: ViewStyle
}

export function CartSummaryBottomBar({ quantity, totalPrice, style }: Props) {
    return(
        <View style={[styles.container, style]}>
            <View>
                <Text style={styles.text}>{`Total items: \t${quantity}`}</Text>
                <Text style={styles.text}>{`Total price ($): \t${totalPrice}`}</Text>
            </View>
            <Text style={styles.link}>Go to payment</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 15
    }
})