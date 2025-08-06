<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const carousel = document.querySelector("#clientsCarousel");
  if (carousel && window.bootstrap) {
    new window.bootstrap.Carousel(carousel, {
      interval: 2000,
      ride: "carousel",
      pause: false,
    });
  }
});
</script>

<template>
  <div class="clients-wrapper">
    <div class="clients-container">
      <!-- Título de la sección -->
      <div class="clients-title">
        <h1>
          <span class="blue-text">Nuestros</span>
          <span class="yellow-text">Clientes</span>
        </h1>
      </div>

      <!-- Carrusel simple -->
      <div id="clientsCarousel" class="custom-carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Grupo 1 -->
          <div class="carousel-item active">
            <table class="clients-table">
              <tr>
                <td><img src="/img/clients/perurail.webp" alt="PeruRail" /></td>
                <td><img src="/img/clients/SEW.webp" alt="SEW" /></td>
                <td><img src="/img/clients/linde.webp" alt="Linde" /></td>
              </tr>
            </table>
          </div>

          <!-- Grupo 2 -->
          <div class="carousel-item">
            <table class="clients-table">
              <tr>
                <td><img src="/img/clients/yura.webp" alt="Yura" /></td>
                <td><img src="/img/clients/tsa.webp" alt="TSA" /></td>
                <td><img src="/img/clients/neuma.webp" alt="Neuma" /></td>
              </tr>
            </table>
          </div>

          <!-- Grupo 3 -->
          <div class="carousel-item">
            <table class="clients-table">
              <tr>
                <td><img src="img/clients/livigui.webp" alt="Livigui" /></td>
                <td><img src="img/clients/prodie.webp" alt="Prodie" /></td>
                <td><img src="img/clients/Festo_logo.webp" alt="Festo" /></td>
              </tr>
            </table>
          </div>

          <!-- Grupo 4 -->
          <div class="carousel-item">
            <table class="clients-table">
              <tr>
                <td><img src="img/clients/gemco.webp" alt="Gemco" /></td>
                <td><img src="img/clients/kampfer.png" alt="Kampfer" /></td>
                <td><img src="img/clients/mgtrading.webp" alt="MG Trading" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.clients-wrapper {
  width: 100%;
  padding: 30px 0;
  background-color: transparent;
}

.clients-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Título */
.clients-title {
  text-align: center;
  margin-bottom: 30px;
}

.clients-title h1 {
  font-family: "Hobo", sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
}

.blue-text {
  color: #00aeef;
  text-shadow: 2px 2px 0 #00598c;
}

.yellow-text {
  color: #ffd400;
  text-shadow: 2px 2px 0 #00598c;
}

/* Tabla para estructura fija */
.clients-table {
  width: 100%;
  table-layout: fixed; /* Importante: cada columna tiene el mismo ancho */
  border-collapse: collapse;
}

.clients-table td {
  width: 33.333%;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
}

/* Imágenes */
.clients-table img {
  display: inline-block;
  max-width: 90%;
  height: auto;
  max-height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 0 2px #ffd400) drop-shadow(0 0 5px #ffd400);
  transition: filter 0.3s;
}

.clients-table img:hover {
  filter: drop-shadow(0 0 4px #ffd400) drop-shadow(0 0 8px #ffd400);
}

/* Responsive */
@media (max-width: 767px) {
  .clients-title h1 {
    font-size: 2rem;
  }

  .clients-table img {
    max-height: 60px;
  }

  .clients-table td {
    padding: 5px;
  }
}

@media (max-width: 480px) {
  .clients-title h1 {
    font-size: 1.8rem;
  }

  .clients-table img {
    max-height: 45px;
  }
}

/* Asegurarse de que el carrusel no tenga estilos conflictivos */
.custom-carousel {
  width: 100%;
}

.carousel-item {
  width: 100%;
}
</style>
