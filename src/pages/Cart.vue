<template>
    <div class="p-4 max-w-4xl mx-auto">
        <div class="space-y-4">
        <CartCardSkeleton v-if="!productStore.loaded" v-for="n in 15" :key="n" />
        </div>
        <div class="space-y-4">
            <CartCard
                v-for="(cartProduct, index) in formattedCart"
                :key="index"
                :cartProduct="cartProduct"
            >
                <template v-slot:cardNumber>
                    {{ index+1 }}
                </template>
                <template v-slot:otherNumber>
                    888
                </template>
            </CartCard>
            <div class="text-right text-2xl md:text-2xl font-bold py-4">
                ยอดรวม: {{ toCurrency(cartStore.total) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import CartCard from '../components/CartCard.vue';
    import CartCardSkeleton from '../components/CartCardSkeleton.vue'
    import { computed } from 'vue';
    import { useCartStore } from '@/store/cart'
    import { useProductStore } from '../store/products'
    import { toCurrency } from '@/shared/utils';

    const cartStore = useCartStore()
    const productStore = useProductStore()

    const formattedCart = computed(()=>cartStore.formattedCart)

    // Mockup
    // import  products from '../mockupdata/product.json'

</script>