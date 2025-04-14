import { Product } from "@/data/models/Product";
import { ProductRepository } from "@/data/repositories/ProductRepository";
import { useEffect, useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const repository = new ProductRepository()
        repository.getAll()
            .then(setProducts)
            .catch((err) => setError(err.message))
    }, [])

    return { products, error }
}