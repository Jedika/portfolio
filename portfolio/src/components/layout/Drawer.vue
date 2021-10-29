<template>
  <q-drawer
    v-model="drawer"
    :width="platform == 'sm' || platform == 'md' ? 170 : 200"
    show-if-above
    bordered
    class="bg-dark overflow-hidden"
    dark
    side="left"
    :breakpoint="599"
  >
    <div class="relative-position">
      <div class="full-height full-width">
        <q-avatar square size="200px" class="q-mb-sm">
          <img style="height: 210px" src="profil.jpg" />
        </q-avatar>
      </div>
      <div
        class="absolute-bottom text-white text-center text-bold"
        style="bottom: 8px"
      >
        <h2
          class="text-uppercase"
          style="
            text-shadow: rgba(0, 0, 0, 0.5) 0px 2px 10px;
            z-index: 1;
            font-size: 18px;
            background: #e19f00c4;
            line-height: 30px
            font-weight: 600;
            letter-spacing: 1.5px;
          "
        >
          Gabriel KWAN
        </h2>
      </div>
    </div>
    <q-list style="font-size: 14px">
      <a v-for="(item, key) in items" :key="key" :href="item.id">
        <q-item dark clickable style="padding-left: 15px">
          <q-item-section avatar>
            <q-icon color="white" :name="item.icon" />
          </q-item-section>

          <q-item-section class="no-margin">{{ item.label }}</q-item-section>
        </q-item>

        <q-separator dark />
      </a>
    </q-list>

    <div class="absolute-bottom full-width">
      <div class="full-width justify-center row">
        <q-avatar flat color="dark" text-color="primary" icon="facebook" />
        <a href="https://www.linkedin.com/in/gabriel-kwan-671916188">
          <q-avatar
            flat
            color="dark"
            text-color="primary"
            icon="fab fa-linkedin"
          />
        </a>
      </div>
      <div class="full-width text-center" style="font-size: 11px">
        Gabriel kwan - 2021
        <!--©-->
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePlatform } from '../utils/usePlateform';

export default defineComponent({
  name: 'Drawer',
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const drawer = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });

    const { platform } = usePlatform();

    const items = [
      { icon: 'home', label: 'Accueil', id: '#home' },
      { icon: 'perm_identity', label: 'Qui suis-je ?', id: '#moi' },
      { icon: 'fas fa-id-card', label: 'C.V', id: '#CV' },
      { icon: 'business_center', label: 'Portfolio', id: '#Portfolio' },
    ];

    return { drawer, platform, items };
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
