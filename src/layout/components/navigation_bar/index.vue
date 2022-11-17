<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, computed, reactive, toRefs } from 'vue';
import { useAppStore } from '@/store';

export default defineComponent({
  setup() {
    const route = useRoute();
    const userStore = useAppStore();
    const breadCrumbList = computed(() => {
      const { meta } = route;
      return meta.breadCrumb;
    });
    const showTagsViews = computed(() => {
      return userStore?.$state?.showTagsView;
    });
    const methods = reactive({
      handleLogin: () => {
        userStore.handelTageViews();
      },
    });
    return { breadCrumbList, showTagsViews, ...toRefs(methods) };
  },
});
</script>

<template>
  <div class="navBar">
    <el-button
      link
      :icon="showTagsViews ? 'DArrowRight' : 'DArrowLeft'"
      @click="handleLogin"
    />
    <el-breadcrumb :separator-icon="'ArrowRight'">
      <el-breadcrumb-item
        v-for="(item, index) in breadCrumbList"
        :key="index"
        :to="{ path: item.path }"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss">
.navBar {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  .el-button {
    margin-right: 20px;
  }
}
</style>
