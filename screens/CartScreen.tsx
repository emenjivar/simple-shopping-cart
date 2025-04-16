import { FlatList, StyleSheet, Text, View } from "react-native"
import useStore from "../stores/useStore"
import { CartItemCard } from "@/components/CartItemCard"
import { CartSummaryBottomBar } from "@/components/CartSummaryBottomBar"

export function CartScreen() {
    const items = useStore((state) => state.cart)
    const count = useStore((state) => state.count)
    const total = useStore((state) => state.total)
    const addItem = useStore((state) => state.addItem)
    const decreateItem = useStore((state) => state.removeItem)
    const removeItem = useStore((state) => state.removeById)

    return (
        <View style={styles.container}>
            <FlatList 
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                    <CartItemCard 
                        cartItem={item}
                        onAdd={() => { addItem(item)}}
                        onDecrease={() => { decreateItem(Number(item.id)) }}
                        onRemove={() => { removeItem(Number(item.id)) }}
                        />
                }/>
            <CartSummaryBottomBar 
                quantity={count}
                totalPrice={total} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})