<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  ref,
} from 'vue';

import SideBarItem from './SideBarItem.vue';
export default defineComponent({
  components: {
    SideBarItem,
  },
  setup() {},
});
</script>

<template>
  <div class="sidebar">
    <SideBarItem />
  </div>
</template>
