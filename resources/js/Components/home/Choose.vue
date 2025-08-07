<script setup>
import { ref } from "vue";
</script>
<template>
    <!-- Appoinment Start -->
    <div
        class="container-fluid mt- mb-0 py-5 wow fadeIn"
        style="background-color: #00598c"
        data-wow-delay="0.1s"
    >
        <div class="container pt-5">
            <div class="row gy-5 gx-0">
                <div class="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
                    <h1 class="display-6 text-uppercase mb-4 logo-text">
                        <span
                            style="
                                color: #ffd400;
                                text-shadow: 2px 2px 0 #003b5c;
                            "
                            >Elígenos
                        </span>
                    </h1>

                    <p class="text-white mb-3 wow fadeIn" data-wow-delay="0.4s">
                        En
                        <span
                            class="logo-text"
                            style="text-shadow: 2px 2px 0 #003b5c"
                            >Prometsur J&N S.A.C.
                        </span>
                        nos caracterizamos por:
                    </p>
                    <p class="text-white mb-1" style="text-align: justify">
                        <i
                            class="bi bi-check-circle"
                            style="color: #fef200"
                        ></i>
                        Entregas puntuales.
                    </p>
                    <p class="text-white mb-1" style="text-align: justify">
                        <i
                            class="bi bi-check-circle"
                            style="color: #fef200"
                        ></i>
                        Cumplimos normas y estándares.
                    </p>
                    <p class="text-white mb-1" style="text-align: justify">
                        <i
                            class="bi bi-check-circle"
                            style="color: #fef200"
                        ></i>
                        Atención 100% personalizada.
                    </p>
                    <p class="text-white mb-1" style="text-align: justify">
                        <i
                            class="bi bi-check-circle"
                            style="color: #fef200"
                        ></i>
                        Personal capacitado y con experiencia.
                    </p>
                    <p class="text-white mb-1" style="text-align: justify">
                        <i
                            class="bi bi-check-circle"
                            style="color: #fef200"
                        ></i>
                        Mejora continua e innovación.
                    </p>

                    <img src="img/logo_mini.webp" style="width: 400px" />
                </div>
                <div class="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
                    <div class="bg-white p-5">
                        <h2 class="text-uppercase mb-4">Consulta ahora:</h2>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        class="form-control border-0 bg-light"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                    <label for="name">Nombre</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input
                                        type="email"
                                        class="form-control border-0 bg-light"
                                        id="mail"
                                        placeholder="Your Email"
                                    />
                                    <label for="mail">Correo</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        class="form-control border-0 bg-light"
                                        id="mobile"
                                        placeholder="Your Mobile"
                                    />
                                    <label for="mobile">Celular</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <select
                                        class="form-select border-0 bg-light"
                                        id="service"
                                    >
                                        <option selected>Steel Welding</option>
                                        <option value="">Pipe Welding</option>
                                    </select>
                                    <label for="service"
                                        >Escoge un servicio</label
                                    >
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea
                                        class="form-control border-0 bg-light"
                                        placeholder="Leave a message here"
                                        id="message"
                                        style="height: 130px"
                                    ></textarea>
                                    <label for="message">Mensaje</label>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button
                                    class="btn btn-primary w-100 py-3"
                                    type="submit"
                                    style="background-color: #ffd400"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Appoinment End -->
</template>
