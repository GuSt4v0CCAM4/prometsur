<script setup>
import { Link } from "@inertiajs/vue3";
//import carousel1 from '../../../assets/img/carousel-1.jpg';
//import carousel2 from '../../../assets/img/carousel-2.jpg';
//import carousel3 from '../../../assets/img/carousel-3.jpg';
import logo from "../../../assets/img/logo_mini.webp";
import { onMounted } from "vue";

onMounted(() => {
    setTimeout(() => {
        const spinner = document.getElementById("spinner");
        if (spinner) {
            spinner.classList.remove("show");
        }
    }, 1);
});
</script>
<template>
    <!-- Spinner Start -->
    <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
        <div
            class="spinner-border text-primary"
            role="status"
            style="width: 3rem; height: 3rem"
        ></div>
    </div>
    <!-- Spinner End -->
    <!-- Topbar Start -->
    <div
        class="container-fluid text-white d-none d-lg-flex wow fadeIn"
        style="background-color: #00598c"
        data-wow-delay="0.1s"
    >
        <div class="container py-3">
            <div class="d-flex align-items-center">
                <a href="/" class="text-decoration-none">
                    <h2 class="text-white fw-bold m-0 logo-text">PROMETSUR</h2>
                </a>
                <div class="ms-auto d-flex align-items-center">
                    <small class="ms-4"
                        ><i class="fa fa-map-marker-alt me-3"></i>Calle Huascar
                        Mz. A Lt. 6
                    </small>
                    <small class="ms-4"
                        ><i class="fa fa-envelope me-3"></i
                        >info@prometsurjynsac.com</small
                    >
                    <small class="ms-4"
                        ><i class="fa fa-phone-alt me-3"></i>+51 983 790
                        081</small
                    >
                    <div class="ms-3 d-flex">
                        <a
                            class="btn btn-sm-square btn-light ms-2"
                            style="color: #00598c"
                            href=""
                            ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a
                            class="btn btn-sm-square btn-light ms-2"
                            style="color: #00598c"
                            href=""
                            ><i class="fab fa-twitter"></i
                        ></a>
                        <a
                            class="btn btn-sm-square btn-light ms-2"
                            style="color: #00598c"
                            href=""
                            ><i class="fab fa-linkedin-in"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <div
        class="container-fluid sticky-top wow fadeIn"
        style="background-color: #f4f4f4"
        data-wow-delay="0.1s"
    >
        <div class="container">
            <nav
                class="navbar navbar-expand-lg navbar-light p-lg-0"
                style="background-color: #f4f4f4"
            >
                <a href="/" class="d-lg-none text-decoration-none">
                    <h1 class="text-dark fw-bold m-0 logo-text">PROMETSUR</h1>
                </a>
                <button
                    type="button"
                    class="navbar-toggler me-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="index.html" class="nav-item nav-link active"
                            >Inicio</a
                        >
                        <a href="about.html" class="nav-item nav-link"
                            >Nosotros</a
                        >
                        <div class="nav-item dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                >Servicios</a
                            >
                            <div
                                class="dropdown-menu bg-light rounded-0 rounded-bottom m-0"
                            >
                                <a href="feature.html" class="dropdown-item"
                                    >Features</a
                                >
                                <a href="team.html" class="dropdown-item"
                                    >Our Team</a
                                >
                                <a href="testimonial.html" class="dropdown-item"
                                    >Testimonial</a
                                >
                                <a href="appoinment.html" class="dropdown-item"
                                    >Appoinment</a
                                >
                                <a href="404.html" class="dropdown-item"
                                    >404 Page</a
                                >
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link"
                            >Proyectos
                        </a>
                    </div>
                    <div class="ms-auto d-none d-lg-block">
                        <a
                            href=""
                            class="btn btn-primary py-2 px-3"
                            style="background-color: #00aeef"
                            >Contactar</a
                        >
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
