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
        <p style="font-size: 20px; line-height: 28px; text-align: center">
          Je suis un <b>Développeur web fullstack</b> et <b>mobile</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMeta, Meta } from 'quasar';

const accueilMeta: Meta = {
  // sets document title
  title: 'Profil Gabriel Kwan',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title: any) => `${title} - C.V / Portfolio`,

  // meta tags
  meta: {
    description: {
      name: 'developpeur web / mobile Gabriel Kwan',
      content: `Gabriel Kwan...
      Je suis un Développeur web fullstack et mobile... Qui suis-je ?
      Développeur & Freelanceur... COMPÉTENCES: Front-end et back-end
      `,
    },
    keywords: {
      name:
        'freelanceur c.v developpeur web mobile fullstack front-end back-end VueJs Quasar-Framework electron',
      content: `Gabriel Kwan...
      Je suis un Développeur web fullstack et mobile... Qui suis-je ?
      Développeur & Freelanceur... COMPÉTENCES: Front-end et back-end
      `,
    },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    // ogTitle: {
    //   property: 'og:title',
    //   // optional; similar to titleTemplate, but allows templating with other meta properties
    //   template(ogTitle: any) {
    //     return `${ogTitle} - My Website`;
    //   },
    // },
  },
};

export default defineComponent({
  name: 'Accueil',
  setup() {
    useMeta(accueilMeta);
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
