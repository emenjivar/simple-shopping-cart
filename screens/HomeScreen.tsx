import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardBottomBar from "../components/CartBottomBar"
import useStore from "../stores/useStore"

export default function HomeScreen() {
    const { products, error } = useProducts()
    const count = useStore((state) => state.count)

    return(
        <View style={styles.container}>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item }) => <ProductCard 
                    product={item} />}
                />

            <CardBottomBar quantity={count} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});