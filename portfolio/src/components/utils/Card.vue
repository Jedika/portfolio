<template>
  <div
    style="
      background: #2c2d2f;
      padding: 0 5vw;
      padding-top: 5vw;
      min-height: 100vh;
    "
    class="full-width row text-primary"
  >
    <div class="full-width row q-pa-sm q-pa-md q-pa-lg">
      <q-card flat class="full-width transparent">
        <q-card-section
          horizontal
          style="border-bottom: 1px dashed #ffffff33; height: 60px"
        >
          <h2 class="text-weight-bold">{{ title }}</h2>
          <q-space />
          <p>
            <q-avatar>
              <q-icon color="primary" :name="icon" />
            </q-avatar>
          </p>
        </q-card-section>

        <q-card-section
          class="row justify-center q-pa-lg q-pa-md q-pa-sm text-white"
        >
          <slot name="section"></slot>
        </q-card-section>

        <slot name="suite"></slot>
      </q-card>
      <div class="col-lg-6 col-md-6 col-sm-12"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
  components: {},
  props: ['title', 'icon'],
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.underline {
  border-bottom: 2px solid $primary;
}
</style>
