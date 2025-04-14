import { Product } from "@/data/models/Product";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ViewStyle, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

type Props = {
    product: Product,
    style?: ViewStyle
}

export default function ProductCard(
    { product, style }: Props
) {
    return (
        <View style={[style, styles.container]}>
            <Image 
                style={styles.image} 
                source={{ uri: product.image }}
                resizeMode="contain" />
            <View style={styles.row}>
                <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                <Text style={[styles.tag, { flex: 1 }]}>{product.category} </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                    <TouchableOpacity  style={styles.button} onPress={() => {}}>
                        <Ionicons name="cart" color={actionColor} size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.tag, { marginStart: 5 }]}>${product.price}</Text>
                </View>
    
            </View>
        </View>
    );
}

const actionColor = 'rgb(75, 75, 75)'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'column',
        flex: 1
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 15,
        marginRight: 5
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    tag: {
        borderColor: actionColor,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 15,
        color: actionColor,
        textAlign: 'center'
    },
    total: {
        color: actionColor
    },
    button: {
        borderColor: actionColor,
        borderRadius: 15,
        borderWidth: 1,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-end'
    }
})