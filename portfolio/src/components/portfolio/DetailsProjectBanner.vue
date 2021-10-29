<template>
  <div class="full-width">
    <q-banner
      dense
      inline-actions
      rounded
      class="bg-orange text-white full-width transparent reverse"
    >
      <template v-slot:action>
        <q-btn
          flat
          icon="arrow_back"
          color="primary"
          @click="$emit('onBack')"
        />
      </template>
    </q-banner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectDetails',
  setup() {
    return {};
  },
});
</script>
