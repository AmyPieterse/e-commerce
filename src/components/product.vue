<template>
    <div v-for="product in products" :key="product.id" class="col-lg-3 col-md-6 col-sm-12 mb-md-2 d-flex justify-content-center align-items-center">
        <div class="card d-flex justify-content-center">
            <img :src="product.image" class="card-img-top imageSize img-fluid" alt="Product Image">
            <div class="card-body">
                
                <h5 class="card-title">{{product.title}}</h5>
                <span class="card-text">{{product.price}}</span>
                
                <div class="d-flex justify-content-between">
                <button>Add to Cart</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'productsComponent',
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        created(){
            this.$store.dispatch('fetchProducts');
        },
        methods:{
            fetchProducts(){
                this.$store.dispatch('fetchProducts')
            }
        }
    }
</script>

<style scoped>
    .imageSize{
        width: 300px;
    }

</style>