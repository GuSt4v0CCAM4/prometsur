<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

//funcion para que funcione el carrousel
onMounted(() => {
    const el = document.querySelector("#carouselExampleSlidesOnly");
    if (el && window.bootstrap) {
        new window.bootstrap.Carousel(el, {
            interval: 2000,
            ride: "carousel",
            pause: false, // <- evita que se detenga al interactuar
        });
    }
});
</script>
<template>
    <div class="container-fluid pt-5 pb-6">
        <div class="container">
            <div
                class="text-center mx-auto wow fadeInUp"
                data-wow-delay="0.1s"
                style="max-width: 600px"
            >
                <h1 class="display-6 text-white text-uppercase mb-5 logo-text">
                    <span style="color: #00aeef; text-shadow: 2px 2px 0 #00598c"
                        >Nuestros
                    </span>
                    <span style="color: #ffd400; text-shadow: 2px 2px 0 #00598c"
                        >Clientes</span
                    >
                </h1>
            </div>
<div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/perurail.webp"
                                    class="glow-border img-fluid"
                                    alt="PeruRail"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/SEW.webp"
                                    class="glow-border img-fluid"
                                    alt="SEW"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/linde.webp"
                                    class="glow-border img-fluid"
                                    alt="Linde"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/yura.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/tsa.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="/img/clients/neuma.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/livigui.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/prodie.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/Festo_logo.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/gemco.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/kampfer.png"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                            <div
                                class="col-sm-6 col-md-4 d-flex justify-content-center align-items-center py-3"
                            >
                                <img
                                    src="img/clients/mgtrading.webp"
                                    class="glow-border img-fluid"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
