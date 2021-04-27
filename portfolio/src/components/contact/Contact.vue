<template>
  <Card title="Me contacter" icon="mail_outline">
    <template v-slot:section>
      <q-input
        class="col-sm-6"
        filled
        v-model="nom"
        label="Votre nom *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        class="col-sm-6"
        filled
        v-model="email"
        label="votre e-mail *"
        type="mail"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-editor
        dark
        class="col-12"
        content-style="height: 200px"
        v-model="editor"
        min-height="5rem"
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  components: {
    Card: require('../utils/Card.vue').default,
  },
  setup() {
    const editor = ref('');
    const nom = ref('');
    const email = ref('');

    return { editor, nom, email };
  },
});
</script>
