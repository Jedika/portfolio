<template>
  <q-header style="background: #00000038">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('menuClick')"
      />

      <q-toolbar-title class="text-uppercase text-center">
        Gabriel Kwan
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  emits: ['menuClick'],
  setup() {
    return {};
  },
});
</script>
