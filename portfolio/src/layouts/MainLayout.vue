<template>
  <q-layout view="lHh Lpr lFf">
    <Header @menuClick="toggleLeftDrawer" />

    <LeftDrawer v-model="leftDrawerOpen" />

    <q-page-container style="padding-top: 0">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header: require('../components/layout/Header.vue').default,
    LeftDrawer: require('../components/layout/Drawer.vue').default,
  },

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
