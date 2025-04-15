import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

type Props = {
    quantity : number,
    style?: ViewStyle,
    onIncrement: () => void,
    onDecrement: () => void,
    onAdd: () => void
}
export default function ItemCounter({ quantity, style, onIncrement, onDecrement, onAdd}: Props) {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity>
                <Text style={styles.link}>Add to cart</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.roundedButton}>
                    <IconSymbol
                        name="minus"
                        size={24}
                        color="white"
                        />
                </TouchableOpacity>
                <Text style={styles.total}>{quantity}</Text>
                <TouchableOpacity style={styles.roundedButton}>
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
        justifyContent: 'space-evenly',
        paddingVertical: 10
    },
    total: {
        fontSize: 20,
        marginHorizontal: 10,
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
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 18
    }
});