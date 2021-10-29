<template>
  <Card title="Mon portfolio" icon="business_center">
    <template v-slot:section>
      <TwoPanel v-model="switchName">
        <card-gallery
          v-for="(dp, key) in detailsProjects"
          :key="key"
          :src_name="dp.src_name"
          :label="dp.label"
          @click="
            switchName = 'panel_2';
            selected = dp;
          "
        />

        <template v-slot:panel_2>
          <div class="full-width full-height">
            <DetailsProjectBanner
              @onBack="
                switchName = 'panel_1';
                selected = null;
              "
            />

            <DetailsProjectContent
              v-if="selected"
              :carousel_length="selected.carousel_length"
              :src_name="selected.src_name"
              :caracteristics="selected.caracteristics"
              :descriptions="selected.descriptions"
            />
          </div>
        </template>
      </TwoPanel>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    Card: require('../utils/Card.vue').default,
    DetailsProjectBanner: require('./DetailsProjectBanner.vue').default,
    DetailsProjectContent: require('./DetailsProjectContent.vue').default,
  },
  setup() {
    const switchName = ref('panel_1');
    const selected = ref(null);

    const detailsProjects = [
      {
        row: 1,
        label: 'ACE',
        src_name: 'ACE',
        carousel_length: 10,
        caracteristics: [
          {
            Language: 'Javascript',
          },
          {
            Framework: 'Quasar (VueJS)',
          },
          { Librairie: '_' },
          { date: 'Mai 2021' },
        ],
        descriptions: `Une application ionic qui permet aux écrivains de planifier leurs séances d’écriture.
        Elle permet de renseigner de commencer un projet, le nombre total de mots estimé ou de caractères.
        Affiche un graphique pour montrer l'avancement du projet et une autre courbe avec le nombre de mots
        qui ont été réellement écrits. Permet de prendre des notes et décrire un personnage. Elle met aussi
        en relation différent écrivains.​`,
      },
    ];

    function selectedProject(selected: number) {
      return detailsProjects.filter((dp) => dp.row === selected);
    }

    return { switchName, detailsProjects, selected, selectedProject };
  },
});
</script>
