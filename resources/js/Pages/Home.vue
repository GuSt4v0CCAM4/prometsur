<script setup>
import { Head } from "@inertiajs/vue3";
import Carousel from "../Components/home/Carousel.vue";
import About from "../Components/home/About.vue";
import Service from "../Components/home/Service.vue";
import Client from "../Components/home/Clients.vue";
import Choose from "../Components/home/Choose.vue";
import { ref } from "vue";
defineProps({ seo: Object });
</script>

<template>
    <Head>
        <title>{{ seo.title }}</title>
        <meta name="description" :content="seo.description" />
    </Head>
    <!-- Navbar (global) -->
    <Navbar />
    <Carousel />
    <About />
    <Service />
    <Choose />
    <Footer />
</template>
