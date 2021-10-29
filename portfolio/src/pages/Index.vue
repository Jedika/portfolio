<template>
  <q-page class="row justify-evenly" style="height: 100vh">
    <Accueil id="home" />
    <Moi id="moi" />
    <Cv id="CV" />
    <Portfolio id="Portfolio" />
    <!-- <Contact /> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Accueil: require('../components/accueil/Accueil.vue').default,
    Moi: require('../components/moi/QuiSuisJe.vue').default,
    Cv: require('../components/cv/Cv.vue').default,
    Portfolio: require('../components/portfolio/Portfolio.vue').default,
    // Contact: require('../components/contact/Contact.vue').default,
  },
  setup() {
    return {};
  },
});
</script>
