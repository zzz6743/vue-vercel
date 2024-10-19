import { defineStore } from 'pinia'
import { CART_STORAGE } from '@/composables/usePersistCart'
import { useProductStore } from './products'

export interface Purchase {
    productId: number
    quantity: number
}

interface CartState {
    contents: Record<string, Purchase>
}

export interface CartPreview {
    id: number
    image: string
    title: string
    quantity: number
    cost: number
}

export const useCartStore = defineStore({ id: 'cart',

    state: ():CartState => ({
        contents:JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {}
    }),

    getters: {

        // Count Item in Cart
        count(): number {
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + this.contents[id].quantity
            }, 0)
        },

        // Total Price
        total(): number {
            const products = useProductStore()
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + products.items[id].price * this.contents[id].quantity
            }, 0)
        },


        // Format Cart
        formattedCart(): CartPreview[] {
            const products = useProductStore()
      
            if (!products.loaded) return []
      
            return Object.keys(this.contents).map((productId) => {
                const purchase = this.contents[productId]
        
                return {
                    id: purchase.productId,
                    image: products.items[purchase.productId].image,
                    title: products.items[purchase.productId].title,
                    quantity: purchase.quantity,
                    cost: purchase.quantity * products.items[purchase.productId].price,
                }
            })
        },
    },

    actions: {

        // Add to Cart
        add(productId: number) {
            if (this.contents[productId]) {
              this.contents[productId].quantity += 1
            } else {
              this.contents[productId] = {
                productId,
                quantity: 1,
              }
            }
        },
        
        // Remove from Cart
        remove(productId: number) {
            if (!this.contents[productId]) {
              return
            }
      
            this.contents[productId].quantity -= 1
      
            if (this.contents[productId].quantity === 0) {
              delete this.contents[productId]
            }
        },

        // Remove from Cart All
        removeAll(productId: number) {
            if (!this.contents[productId]) {
              return
            }
      
            this.contents[productId].quantity = 0

            if (this.contents[productId].quantity === 0) {
                delete this.contents[productId]
            }
            
        },

    }

})