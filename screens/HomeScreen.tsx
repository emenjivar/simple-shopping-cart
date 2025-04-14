import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const { products, error } = useProducts()
    return(
        <View style={styles.container}>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item }) => <ProductCard product={item} />}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});