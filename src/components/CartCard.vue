<template>
    <div class="card md:card-side border-2 hover:bg-gray-300">
        <figure class="p-8">
        <img
            :src="cartProduct.image"
            alt="Card Image"
            class="object-contain w-40 h-40"
        />
        <slot name="otherNumber"></slot>
        </figure> 
        <div class="card-body">
            <h2 class="card-title w-96">
                <slot name="cardNumber"></slot>
                <router-link class="link link-hover" :to="`/product/${cartProduct.id}`">{{ cartProduct.title }}</router-link>
            </h2>
            <p>{{ toCurrency(cartProduct.cost) }}</p>
            <div class="card-actions">
                <div class="btn-group">
                    <button class="btn btn-primary" @click="cartStore.remove(cartProduct.id)"> - </button>
                    <button class="btn btn-ghost no-animation">{{ cartProduct.quantity }}</button>
                    <button class="btn btn-primary" @click="cartStore.add(cartProduct.id)">+</button>
                </div>
                <div>
                    <button @click="cartStore.removeAll(cartProduct.id)" class="btn btn-sm btn-error mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
    import { toCurrency } from '../shared/utils'
    import type { CartPreview } from '@/store/cart';
    import { useCartStore } from '@/store/cart';
    import { useProductStore } from '../store/products'

    const cartStore = useCartStore()
    const productStore = useProductStore()
    defineProps<{
        cartProduct: CartPreview
    }>()

</script>