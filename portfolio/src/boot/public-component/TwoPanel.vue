<template>
  <q-tab-panels
    v-model="value"
    animated
    class="full-height full-width transparent q-pa-sm"
    style="border: 1px dashed #f9f9f936"
  >
    <q-tab-panel
      dark
      name="panel_1"
      class="row transparent"
      style="height: 600px"
    >
      <slot></slot>
    </q-tab-panel>

    <q-tab-panel
      name="panel_2"
      class="column no-padding no-margin justify-center items-center"
      style="height: 600px"
    >
      <slot name="panel_2"></slot>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from 'vue';

export default defineComponent({
  name: 'TwoPanel',
  props: {
    modelValue: String,
  },
  setup(props, { emit }: SetupContext) {
    const value = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });
    return { value };
  },
});
</script>
