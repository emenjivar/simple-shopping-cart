import { create } from "zustand";

export type CartItem = {
    id: Number,
    title: string,
    price: number,
    quantity: number,
    image: string
}

type CartState = {
    count: number,
    total: number,
    cart: CartItem[],
    addItem: (item: CartItem) => void,
    removeItem: (id: number) => void,
    removeById: (id: number) => void,
    getItem: (id: number) => CartItem | undefined
}

const useStore = create<CartState>((set, get) => ({
    count: 0,
    total: 0,
    cart: [],
    addItem: (item) => {
        set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.id == item.id)
            if (existingItem) {
                // Increase the existent cart item based in the id
                const updatedCart = state.cart.map((cartItem) => {
                    if (cartItem.id == item.id) {
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    } else {
                        return cartItem
                    }
                })
                return {
                    count: state.count + 1,
                    total: state.total + item.quantity * item.price,
                    cart: updatedCart
                }
            }

            // Append the new item to the cart
            return {
                count: state.count + 1,
                total: state.total + item.price * item.quantity,
                cart: [...state.cart, {...item, quantity: 1}]
            }
        })
    },
    removeItem: (id) => {
        set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.id == id)
            if (existingItem && existingItem.quantity > 1) {
                // Decrease the size but keep the object in the cart
                const updatedCart = state.cart.map((cartItem) => {
                    if (cartItem.id == id) {
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    } else {
                        return cartItem
                    }
                })
                return {
                    count: state.count - 1,
                    total: state.total - existingItem.price * existingItem.quantity,
                    cart: updatedCart
                }
            }

            // Remove the object from the cart
            return state
        })
    },
    removeById: (id) => {
        set((state) => {
            let amount = state.cart.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)
            return {
                count: 0,
                total: state.total - amount,
                cart: state.cart.filter(item => item.id != id)
            }
        })
    },
    getItem: (id: number) => {
        const state = get()
        return state.cart.find(item => item.id === id)
    }
}))

export default useStore