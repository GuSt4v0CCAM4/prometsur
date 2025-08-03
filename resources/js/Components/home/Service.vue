<script setup>
import { ref } from "vue";

const services = ref([
    {
        id: 1,
        img: "mdi-account-group",
        title: "Desarrollo de Software",
        description:
            "Desarrollo de aplicaciones web y móviles personalizadas para empresas de todo tipo.",
    },
    {
        id: 2,
        img: "mdi-account-group",
        title: "2Desarrollo de Software",
        description:
            "Desarrollo de aplicaciones web y móviles personalizadas para empresas de todo tipo.",
    },
    {
        id: 3,
        img: "mdi-account-group",
        title: "3Desarrollo de Software",
        description:
            "Desarrollo de aplicaciones web y móviles personalizadas para empresas de todo tipo.",
    },
]);
</script>
<template>
    <!-- Service Start -->
    <div
        class="container-fluid service pt-6 pb-6"
        style="background-color: #00598c"
    >
        <div class="container">
            <div
                class="text-center mx-auto wow fadeInUp"
                data-wow-delay="0.1s"
                style="max-width: 600px"
            >
                <h1 class="display-6 text-white text-uppercase mb-5 logo-text">
                    <span style="text-shadow: 2px 2px 0 #003b5c"
                        >Nuestros
                    </span>
                    <span style="color: #ffd400; text-shadow: 2px 2px 0 #003b5c"
                        >Servicios</span
                    >
                </h1>
            </div>
            <div class="row g-4">
                <div
                    v-for="service in services"
                    key="service.id"
                    class="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <div class="service-item">
                        <div class="service-inner pb-5">
                            <img
                                class="img-fluid w-100"
                                src="img/service-1.jpg"
                                alt=""
                            />
                            <div class="service-text px-5 pt-4">
                                <h5 class="text-uppercase">
                                    {{ service.title }}
                                </h5>
                                <p>
                                    {{ service.description }}
                                </p>
                            </div>
                            <a class="btn btn-light px-3" href=""
                                >Read More<i
                                    class="bi bi-chevron-double-right ms-1"
                                ></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->
</template>
