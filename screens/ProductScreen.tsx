import { useFetchProduct } from "@/hooks/useFetchProduct";
import { Image, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Product } from "@/data/models/Product";
import ItemCounter from "@/components/ItemCounter";
import useStore from "../stores/useStore";

export default function ProductScreen() {
    const { id } = useLocalSearchParams()
    const { product, error } = useFetchProduct(Number(id))

    if(product) {
        return <ProductContent product={product} />
    }

    return(
        <Text>error</Text>
    )
}

function ProductContent({ product }: { product: Product }) {
    const cart = useStore((state) => state.cart)
    const addItem = useStore((state) => state.addItem)
    const removeItem = useStore((state) => state.removeItem)
    const getItem = useStore((state) => state.getItem)
    const removeById = useStore((state) => state.removeById)

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri : product.image }}
                resizeMode="contain" />
            
            <Text style={styles.title}>{product.title}</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Text style={styles.tag}>Category: {product.category}</Text>
                <Text style={styles.tag}>$ {product.price}</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <View style={{ flex: 1 }}/>
            <ItemCounter 
                quantity={getItem(product.id)?.quantity ?? 0} 
                onIncrement={() => {
                    addItem({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        quantity: 1
                    })
                }} 
                onDecrement={() => {
                    removeItem(product.id)
                }} 
                onRemoveItem={() => {
                    removeById(product.id)
                }}
                openCart={() => {}}
            />
        </View>
    );
}

const actionColor = 'rgb(75, 75, 75)'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 10,
        fontSize: 14
    },
    tag : {
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: actionColor,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 4
    }
});