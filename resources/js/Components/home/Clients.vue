<script setup>
import { ref } from "vue";
</script>
<template>
    <div class="container-fluid py-5"">
        <div class="container">
            <div
                class="text-center mx-auto pb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                style="
                    max-width: 600px;
                    visibility: visible;
                    animation-delay: 0.1s;
                    animation-name: fadeInUp;
                "
            >
                <h1 class="display-6 text-uppercase mb-4 logo-text">

                    <span
                        style="
                            color: #00aeef;
                            text-shadow: 2px 2px 0 #00598c;
                        "
                        >Nuestros
                    </span>
                    <span
                        style="
                            color: #ffd400;
                            text-shadow: 2px 2px 0 #00598c;
                        "
                        >Clientes</span
                    >

                </h1>
            </div>
            <div
                id="transparent-carousel"
                class="carousel slide mb-5"
                data-bs-ride="carousel"
                data-bs-interval="1500"
            >
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="img/clients/perurail.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 1"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/SEW.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 2"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/linde.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="img/clients/yura.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/tsa.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/neuma.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="img/clients/livigui.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/prodie.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/Festo_logo.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="img/clients/gemco.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/kampfer.png"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                            <div class="col-4">
                                <img
                                    src="img/clients/mgtrading.webp"
                                    style="height: 125px"
                                    class="img-fluid glow-border"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- Añade más items del carrusel si es necesario -->
                </div>
            </div>
        </div>
    </div>
</template>
