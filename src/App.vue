<template>
    <!-- <div class="flex h-screen">
    <div class="m-auto">
      <button class="btn">Hello DaisyUI</button>
    </div>
  </div> -->


    <div class="drawer">
        <input id="drawer-input" type="checkbox" class="drawer-toggle" />
        <div class="bg-base-100 text-base-content min-h-screen drawer-content">
            <Nav />
            <div class="mt-16">
                <router-view></router-view>
            </div>
            <Footer />
        </div>
        <div class="drawer-side">
            <label for="drawer-input" class="drawer-overlay"></label>
            <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
                <li>
                    <router-link to="/">หน้าหลัก</router-link>
                </li>
                <li>
                    <router-link to="/about">เกี่ยวกับเรา</router-link>
                </li>
            </ul>
        </div>
    </div>


</template>

<script setup lang="ts">
    import Footer from '@/components/Footer.vue'
    import Nav from '@/components/Nav.vue'

    import { useProductStore } from '@/store/products'
    import { usePersistCart } from './composables/usePersistCart'

    const productStore = useProductStore()
    productStore.fetchAll()

    usePersistCart()
</script>

<style scoped></style>