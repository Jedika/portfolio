<template>
  <Card title="Qui suis-je ?" icon="far fa-user">
    <template v-slot:section>
      <div
        class="row justify-center col-lg-6 col-sm-6 col-xs-12"
        style="padding-bottom: 20px"
      >
        <div class="full-width">
          <h3 class="text-white text-weight-bold">Développeur & Freelanceur</h3>
        </div>
      </div>

      <div class="col-lg-6 col-sm-6 col-xs-12">
        <h3
          class="text-white text-weight-bold"
          style="margin-bottom: 20px; letter-spacing: 1px"
        >
          Information personnel
        </h3>
        <p v-for="(info, key) in infoData" :key="key">
          <b class="underline">{{ info.key }}</b> :
          <span v-html="info.value"></span>
        </p>
        <a style="text-decoration: none" href="CV-gabriel.zip" download>
          <q-btn color="primary" label="Télecharger le C.V" no-caps />
        </a>
      </div>
    </template>

    <template v-slot:suite>
      <q-space style="width: 0; height: 50px" />

      <q-card-section class="row">
        <div class="full-width row justify-center">
          <div class="col-12 row justify-center">
            <h3
              class="text-white text-weight-bold text-center underline"
              style="display: inline-block; letter-spacing: 1px"
            >
              Services
            </h3>
          </div>
          <div
            class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12"
          >
            <q-avatar size="100px" icon="computer" />
            <p class="col-12 text-center">Développement web</p>
          </div>

          <div
            class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12"
          >
            <q-avatar size="100px" icon="devices" />
            <p class="col-12 text-center">Responsive design</p>
          </div>

          <div
            class="row justify-center items-center q-pa-lg col-sm-4 col-xs-12"
          >
            <q-avatar size="100px" icon="smartphone" />
            <p class="col-12 text-center">Développement mobile</p>
          </div>
        </div>
      </q-card-section>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'QuiSuisje',
  components: {
    Card: require('../utils/Card.vue').default,
  },
  setup() {
    const age = computed(() => {
      const diff_ms = Date.now() - new Date(1996, 1, 17).getTime();
      const age_dt = new Date(diff_ms);

      return Math.abs(age_dt.getUTCFullYear() - 1970);
    });

    const infoData = computed(() => [
      { key: 'Nom', value: '&nbsp KWAN' },
      {
        key: 'Prenom',
        value:
          '&nbsp Yannick <span style="border-bottom: 1px solid white">Gabriel</span>',
      },
      { key: 'Age', value: '&nbsp ' + age.value },
      { key: 'Adresse', value: '&nbsp Lot IB01 / 3611 Tanambao Fianarantsoa' },
      { key: 'Ville', value: '&nbsp Fianarantsoa' },
      { key: 'Pays', value: '&nbsp Madagascar' },
      { key: 'Email', value: '&nbsp kwangabriel.gk@gmail.com' },
      { key: 'Phone', value: '&nbsp +261 32 67 341 55' },
    ]);
    return {
      infoData,
    };
  },
});
</script>

<style lang="scss"></style>
