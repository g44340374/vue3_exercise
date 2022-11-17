<script lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { defineComponent, computed, reactive, toRefs } from 'vue';
import { useAppStore } from '@/store';

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useAppStore();

    const routes = computed(() => {
      return router.options.routes[1].children;
    });
    const route = useRoute();
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta?.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    const showTagsViews = computed(() => {
      return userStore?.$state?.showTagsView;
    });
    return { activeMenu, routes, showTagsViews };
  },
});
</script>

<template>
  <div class="nav">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      router
      :collapse="showTagsViews"
    >
      <div v-for="item in routes" :key="item.name">
        <el-menu-item v-if="!item.children" :index="item.path">
          <el-icon v-if="item.meta.icon">
            <component :is="item.meta.icon" />
          </el-icon>
          <span v-show="!showTagsViews">{{ item.meta.title }}</span>
        </el-menu-item>
        <el-sub-menu v-else>
          <template #title>
            <el-icon v-if="item.meta.icon">
              <component :is="item.meta.icon" />
            </el-icon>
            <span v-show="!showTagsViews">{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="val in item.children"
              :key="val.name"
              :index="val.path"
            >
              <el-icon v-if="val.meta.icon">
                <component :is="val.meta.icon" />
              </el-icon>
              <span>{{ val.meta.title }} </span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss">
.nav {
  width: 100%;
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
