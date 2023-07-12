<template>
    <div>
        <h1>This is the products page</h1>
        <div class="row d-flex justify-content-center">
        <Product/>
        </div>
    </div>
</template>

<script>
    import Product from '@/components/product.vue'
    export default {
        components:{
            Product
        }
    }
</script>

<style scoped>

</style>