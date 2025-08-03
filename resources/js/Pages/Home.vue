<script setup>
import { Head } from "@inertiajs/vue3";
import Carousel from "../Components/home/Carousel.vue";
import About from "../Components/home/About.vue";
import Service from "../Components/home/Service.vue";
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
    <div class="bg-gray-100">
        <!-- Contenido estático (SEO-friendly) -->
        <section class="container mx-auto py-12">
            <h1 class="text-4xl font-bold">Bienvenidos a nuestra empresa</h1>
            <p class="mt-4 text-lg">Servicios de metalurgia industrial...</p>
        </section>
    </div>
    <Footer />
</template>
