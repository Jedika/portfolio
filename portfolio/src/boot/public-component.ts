import { boot } from 'quasar/wrappers';

import CardGallery from './public-component/CardGallery.vue';
import TwoPanel from './public-component/TwoPanel.vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  app.component('CardGallery', CardGallery);
  app.component('TwoPanel', TwoPanel);
});
