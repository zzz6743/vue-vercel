<template>
    <div class="navbar fixed z-50 mb-2 shadow-lg bg-neutral text-neutral-content">
        <div class="flex-none lg:hidden">
            <label for="drawer-input" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
        </div> 
        
        <div class="flex-none px-2 mx-2">
            <router-link to="/"><span class="text-lg font-bold">ร้านออนไลน์</span></router-link>
        </div> 
        <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
                <router-link class="btn btn-ghost btn-sm rounded-btn text-lg capitalize" to="/">
                    หน้าหลัก
                </router-link>
                <router-link class="btn btn-ghost btn-sm rounded-btn text-lg capitalize" to="/about">
                    เกี่ยวกับเรา
                </router-link>
            </div>
        </div> 
        <div class="flex-1 lg:flex-none">
            <router-link class="btn btn-ghost btn-sm rounded-btn text-lg capitalize" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div class="badge ml-1 mr-4 badge-outline" v-text="count"></div>
            </router-link>
            <Search />
        </div>

    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import Search from './Search.vue'
    import { useCartStore } from '@/store/cart'

    const cartStore = useCartStore()
    const count = computed(()=>cartStore.count)

</script>