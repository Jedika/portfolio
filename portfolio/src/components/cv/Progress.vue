<template>
  <div class="col-sm-5 col-xs-12">
    <div class="full-width row justify-center q-pa-xs">
      <p class="text-white">{{ title }}</p>
    </div>
    <q-linear-progress rounded size="20px" :value="value" color="primary">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="label" />
      </div>
    </q-linear-progress>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress',
  props: ['title', 'label', 'value'],
  setup() {
    return;
  },
});
</script>
