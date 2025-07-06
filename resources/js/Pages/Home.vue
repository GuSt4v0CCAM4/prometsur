<script setup>
import { Head } from '@inertiajs/vue3';

defineProps({ seo: Object });
</script>

<template>
    <Head>
        <title>{{ seo.title }}</title>
        <meta name="description" :content="seo.description">
    </Head>

    <div class="bg-gray-100">
        <!-- Navbar (global) -->
        <Navbar />

        <!-- Contenido estático (SEO-friendly) -->
        <section class="container mx-auto py-12">
            <h1 class="text-4xl font-bold">Bienvenidos a nuestra empresa</h1>
            <p class="mt-4 text-lg">Servicios de metalurgia industrial...</p>
        </section>

    </div>
</template>
