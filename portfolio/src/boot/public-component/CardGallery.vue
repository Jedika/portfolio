<template>
  <div class="card-parent" style="width: 250px; height: 237px">
    <q-card
      flat
      style="background: transparent"
      class="card-container full-height full-width"
    >
      <q-card
        flat
        bordered
        square
        dark
        style="
          width: 200px;
          height: 200px;
          contain: content;
          position: absolute;
          left: 0;
          z-index: 3;
        "
        class="card-content card-content1"
      >
        <img
          :src="`portfolio/${src_name}/1.jpg`"
          style="width: 100%; object-fit: cover; height: 100%"
        />
      </q-card>

      <q-card
        flat
        bordered
        square
        dark
        style="
          width: 200px;
          height: 200px;
          contain: content;
          position: absolute;
          left: 0px;
          z-index: 2;
          transform: scale(0.95);
          filter: contrast(0.6);
        "
        class="card-content card-content2"
      >
        <img
          :src="`portfolio/${src_name}/2.jpg`"
          style="width: 100%; object-fit: cover; height: 100%"
        />
      </q-card>

      <q-card
        flat
        bordered
        square
        dark
        style="
          width: 200px;
          height: 200px;
          contain: content;
          position: absolute;
          left: 0px;
          z-index: 1;
          transform: scale(0.9);
          filter: contrast(0.3);
        "
        class="card-content card-content3"
      >
        <img
          :src="`portfolio/${src_name}/3.jpg`"
          style="width: 100%; object-fit: cover; height: 100%"
        />
      </q-card>
    </q-card>
    <div
      style="
        position: absolute;
        bottom: 0;
        margin-right: 50px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 40px;
      "
      class="text-center text-no-wrap"
    >
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardGallery',
  props: {
    src_name: String,
    label: String,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  transition: all ease 300ms;
}
.card-parent {
  position: relative;
}

.card-parent:hover > .card-container {
  transform: perspective(400px) rotateY(-15deg);
}

.card-content {
  padding: 5px;
  background: #e3e3e3;
  border: 1px solid #e3e3e3;
  transition: all ease 300ms;
}

.card-parent:hover > .card-container > .card-content2 {
  left: 25px !important;
}

.card-parent:hover > .card-container > .card-content3 {
  left: 44px !important;
}
</style>
