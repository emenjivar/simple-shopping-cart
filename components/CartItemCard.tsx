import { CartItem } from "@/stores/useStore"
import { Image, StyleSheet, View, Text, ViewStyle, Pressable } from "react-native"
import { IconSymbol } from "./ui/IconSymbol"

type Props = {
    cartItem: CartItem,
    onAdd: () => void,
    onDecrease: () => void,
    onRemove: () => void,
    style?: ViewStyle
}

export function CartItemCard({ cartItem, onAdd, onDecrease, onRemove, style }: Props) {
    return (
        <View style={[styles.container]}>
            <Image 
                style={styles.image}
                source={{ uri : cartItem.image }} 
                resizeMode="contain" />
            
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{cartItem.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                    <Text style={styles.tag}>${cartItem.price}</Text>
                    <View style={{ flex: 1 }}/>
                    <Pressable onPress={onDecrease} style={styles.button}>
                        <IconSymbol
                            name="minus"
                            size={20}
                            color="white" />
                    </Pressable>
                    
                    <Text style={styles.quantityText}>{cartItem.quantity}</Text>

                    <Pressable onPress={onAdd} style={styles.button}>
                        <IconSymbol
                            name="plus"
                            size={20}
                            color="white" />    
                    </Pressable>
                    
                    <Pressable onPress={onRemove} style={{ marginHorizontal: 15}}>
                        <Text style={styles.link}>Remove</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 90,
        marginEnd: 15
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'black'
    },
    quantityText: {
        marginHorizontal: 15
    },
    tag: {
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15
    }
})