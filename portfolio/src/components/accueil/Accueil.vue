<template>
  <div style="height: 100vh" class="full-width relative-position">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="full-height full-width absolute"
      style="z-index: 1"
    >
      <q-carousel-slide :name="1" img-src="slide1.jpg" />
      <q-carousel-slide :name="2" img-src="slide2.jpg" />
      <q-carousel-slide :name="3" img-src="slide3.jpg" />
    </q-carousel>
    <div
      class="full-height full-width text-white absolute row justify-center items-center"
      style="z-index: 2; background: #00000068"
    >
      <div class="full-width row justify-center items-center">
        <h1 class="full-width text-center">
          Gabriel <span style="color: #e19f00">Kwan</span>
        </h1>
        <br />
        <p style="font-size: 20px; line-heigh: 28px">
          Je suis un <b>Développeur web fullstack</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Accueil',
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
