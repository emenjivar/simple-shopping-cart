import { Product } from "../models/Product";

class ProductRepository {
    private mockData : Product[] = [
        {
            id: 1,
            title: "Backpack, Fitst 15 laptop",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 2,
            title: "Mens Casual premium slim fit T-shirt",
            price: 22.4,
            description: "Slim-fitting style, contrast raglan long sleeve.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
    ]

    getAll(): Product[] {
        return this.mockData
    }

    findById(id: number): Product | undefined {
        return this.mockData.find(product => product.id == id)
    }
}