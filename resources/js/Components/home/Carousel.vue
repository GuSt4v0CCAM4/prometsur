<script setup>
import { Link } from "@inertiajs/vue3";
import { onMounted } from "vue";

//funcion para que funcione el carrousel
onMounted(() => {
    const el = document.querySelector("#header-carousel");
    if (el && window.bootstrap) {
        new window.bootstrap.Carousel(el, {
            interval: 5000,
            ride: "carousel",
            pause: false, // <- evita que se detenga al interactuar
        });
    }
});
</script>
<template>
    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-2 wow fadeIn" data-wow-delay="0.1s">
        <div
            id="header-carousel"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="/img/carousel-1.jpg" alt="Image" />
                    <div class="carousel-caption">
                        <h1
                            class="display-1 text-uppercase mb-4 animated zoomIn logo-text"
                            style="
                                color: #f2f9ff;
                                text-shadow: 2px 2px 0 #ffffff;
                            "
                        >
                            Experiencia <br />
                            que cuenta
                        </h1>
                        <h2
                            class="mb-4 animated zoomIn"
                            style="
                                color: #ffd400;
                                text-shadow: 1px 1px 0 #ffffff;
                            "
                        >
                            Más de 10 años impulsando la industria peruana
                        </h2>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="/img/carousel-2.jpg" alt="Image" />
                    <div class="carousel-caption">
                        <h1
                            class="display-1 text-uppercase mb-4 animated zoomIn logo-text"
                            style="
                                color: #f2f9ff;
                                text-shadow: 2px 2px 0 #ffffff;
                            "
                        >
                            Tecnología <br />
                            aplicada
                        </h1>
                        <h2
                            class="mb-4 animated zoomIn"
                            style="
                                color: #ffd400;
                                text-shadow: 1px 1px 0 #ffffff;
                            "
                        >
                            Especialistas en metalmecánica y termofusión HDPE
                        </h2>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="/img/carousel-3.jpg" alt="Image" />
                    <div class="carousel-caption">
                        <h1
                            class="display-1 text-uppercase mb-4 animated zoomIn logo-text"
                            style="
                                color: #f2f9ff;
                                text-shadow: 2px 2px 0 #ffffff;
                            "
                        >
                            Precisión <br />
                            garantizada
                        </h1>
                        <h2
                            class="mb-4 animated zoomIn"
                            style="
                                color: #ffd400;
                                text-shadow: 1px 1px 0 #ffffff;
                            "
                        >
                            Diseñamos y fabricamos con altos estándares de
                            calidad
                        </h2>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    </div>
    <!-- Carousel End -->
</template>
