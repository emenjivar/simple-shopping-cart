import { Product } from "@/data/models/Product";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useStore from "../stores/useStore"
import { View, Text, ViewStyle, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight, Pressable } from "react-native";

type Props = {
    product: Product,
    style?: ViewStyle
}

export default function ProductCard(
    { product, style }: Props
) {
    const router = useRouter()

    return (
        <Pressable 
            onPress={() => {
                router.navigate(`/product/${product.id}`)
            }} 
            style={[style]}>
            <View style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={{ uri: product.image }}
                    resizeMode="contain" />
                <View style={styles.row}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.tag}>${product.price}</Text>
                    <Text style={styles.tag}>{product.category} </Text>
                </View>
            </View>
        </Pressable>
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
        fontWeight: 'bold',
        marginBottom: 5
    },
    tag: {
        borderColor: actionColor,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 15,
        color: actionColor,
        textAlign: 'center',
        alignSelf: 'flex-start',
        marginVertical: 2
    },
    total: {
        color: actionColor
    },
    button: {
        borderColor: actionColor,
        borderRadius: 15,
        borderWidth: 1,
        width: 45,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-end'
    }
})