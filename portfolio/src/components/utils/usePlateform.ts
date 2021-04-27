import { useQuasar } from 'quasar';
import { computed } from 'vue';

export const usePlatform = () => {
  const $q = useQuasar();

  const platform = computed(() => {
    return $q.screen.lt.sm ? 'sm' : $q.screen.lt.md ? 'md' : 'lg';
  });

  function homeContainerStyle() {
    const lgStyle = 'padding: 0 20%';
    const mdStyle = 'padding: 0 15%';
    const smStyle = 'padding: 0 3px';

    switch (platform.value) {
      case 'lg':
        return lgStyle;
      case 'md':
        return mdStyle;
      case 'sm':
        return smStyle;
    }
  }

  return {
    platform,
    homeContainerStyle,
  };
};
