import { Product } from "@/data/models/Product";
import { ProductRepository } from "@/data/repositories/ProductRepository";
import { useEffect, useState } from "react";

export function useFetchProduct(id: number) {
    const [product, setProduct] = useState<Product | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const repository = new ProductRepository()
        repository.findById(id)
            .then(setProduct)
            .catch((err) => setError(err.message))
    }, [id])

    return { product, error }
}