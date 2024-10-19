<template>
    <div class="card border-2 hover:bg-gray-300">
        <figure class="px-8 pt-10">
            <router-link class="link link-hover" :to="`/product/${product.id}`">
                <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64 rounded"
                />
            </router-link>
        </figure> 
        <div class="card-body">
            <h2 class="card-title text-lg">
                <!-- <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link> -->
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <!-- <button class="btn btn-primary" @click="cartStore.add(product.id)">Add to Cart</button> -->
                <button class="btn btn-primary" @click="cartStore.add(product.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>&nbsp;
                    เพิ่มลงรถเข็น
                </button>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">

import type { Product } from '../types/product_type'
import { toCurrency } from '../shared/utils'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()

defineProps<{product: Product}>()

</script>