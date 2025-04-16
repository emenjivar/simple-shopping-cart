import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

type Props = {
    quantity : number,
    style?: ViewStyle,
    onIncrement: () => void,
    onDecrement: () => void,
    onRemoveItem: () => void,
    openCart: () => void
}
export default function ItemCounter({ quantity, style, onIncrement, onDecrement, onRemoveItem, openCart}: Props) {
    return (
        <View style={[styles.container, style]}>
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity onPress={openCart}>
                    <Text style={styles.link}>Go to cart</Text>
                </TouchableOpacity>
                <View style={{ width: 15 }}/>
                <TouchableOpacity onPress={onRemoveItem}>
                    <Text style={styles.link}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.roundedButton} onPress={onDecrement}>
                    <IconSymbol
                        name="minus"
                        size={24}
                        color="white"
                        />
                </TouchableOpacity>
                <Text style={styles.total}>{quantity}</Text>
                <TouchableOpacity style={styles.roundedButton} onPress={onIncrement}>
                    <IconSymbol
                        name="plus"
                        size={24}
                        color="white"
                        />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 10,
    },
    total: {
        fontSize: 15,
        marginHorizontal: 10,
        color: 'white'
    },
    roundedButton: {
        padding: 5,
        borderRadius: 18,
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 15
    }
});