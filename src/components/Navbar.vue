<template>
    <nav class="navbar navbar-expand-lg navbar-light py-2">
        <router-link to="/" class="navbar-brand">
        </router-link>
    
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
        <span><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list text-light"
                viewBox="0 0 16 16">
            <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
            </svg>
            </span>
        </button>
    
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/checkout">Checkout</router-link>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>